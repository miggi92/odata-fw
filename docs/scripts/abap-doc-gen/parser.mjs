import { SECTION_ORDER } from './constants.mjs'
import { AbapDocUtils } from './utils.mjs'

export class AbapClassModel {
  constructor() {
    this.name = ''
    this.description = ''
    this.isAbstract = false
    this.isFinal = false
    this.inheritsFrom = ''
    this.interfaces = []
    this.sections = { public: [], protected: [], private: [] }
  }
}

export class AbapClassParser {
  constructor() {
    this.lines = []
    this.index = 0
    this.currentSection = null
    this.currentDocBlock = []
    this.model = new AbapClassModel()
  }

  parse(source) {
    this.lines = source.split(/\r?\n/)
    this.index = 0
    this.currentSection = null
    this.currentDocBlock = []
    this.model = new AbapClassModel()

    while (this.index < this.lines.length) {
      const line = this.lines[this.index]
      const trimmed = line.trim()

      if (this.isDocLine(trimmed)) {
        this.currentDocBlock.push(trimmed)
        this.index++
        continue
      }

      if (this.tryParseClassDefinition(trimmed)) continue
      if (this.isImplementationStart(trimmed)) break
      if (this.tryParseSection(trimmed)) continue
      if (this.tryParseInterface(trimmed)) continue
      if (this.tryParseColonMethods(trimmed, line)) continue
      if (this.tryParseSingleMethod(trimmed)) continue
      if (this.shouldResetDocBlock(trimmed)) this.currentDocBlock = []

      this.index++
    }

    return this.model
  }

  isDocLine(trimmed) {
    return trimmed.startsWith('"!')
  }

  isImplementationStart(trimmed) {
    return /^CLASS\s+\S+\s+IMPLEMENTATION/i.test(trimmed)
  }

  shouldResetDocBlock(trimmed) {
    if (!trimmed) return false
    if (/^\s*(CLASS-DATA|DATA|CONSTANTS|TYPES|ALIASES)/i.test(trimmed)) return true
    if (trimmed.startsWith('"!')) return false
    return true
  }

  tryParseClassDefinition(trimmed) {
    const classDefMatch = trimmed.match(/^CLASS\s+(\S+)\s+DEFINITION/i)
    if (!classDefMatch || this.model.name) return false

    this.model.name = classDefMatch[1].toUpperCase()
    if (this.currentDocBlock.length > 0) {
      this.model.description = AbapDocUtils.parseDocBlock(this.currentDocBlock).description
    }
    this.currentDocBlock = []

    const defBlock = this.collectDefinitionHeader(this.index)
    if (/\bABSTRACT\b/i.test(defBlock)) this.model.isAbstract = true
    if (/\bFINAL\b/i.test(defBlock)) this.model.isFinal = true

    const inheritMatch = defBlock.match(/INHERITING\s+FROM\s+(\S+)/i)
    if (inheritMatch) {
      this.model.inheritsFrom = inheritMatch[1].toUpperCase()
    }

    this.index++
    return true
  }

  collectDefinitionHeader(startIndex) {
    let block = ''
    let j = startIndex
    while (j < this.lines.length && !this.lines[j].trim().match(/^\.\s*$/)) {
      block += ` ${this.lines[j].trim()}`
      j++
    }
    return block
  }

  tryParseSection(trimmed) {
    const sectionMap = {
      public: /^\s*PUBLIC\s+SECTION\s*\./i,
      protected: /^\s*PROTECTED\s+SECTION\s*\./i,
      private: /^\s*PRIVATE\s+SECTION\s*\./i
    }

    for (const sectionName of SECTION_ORDER) {
      if (sectionMap[sectionName].test(trimmed)) {
        this.currentSection = sectionName
        this.currentDocBlock = []
        this.index++
        return true
      }
    }

    return false
  }

  tryParseInterface(trimmed) {
    if (!this.currentSection || !/^\s*INTERFACES\s+/i.test(trimmed)) return false

    const ifMatch = trimmed.match(/INTERFACES\s+(\S+)/i)
    if (ifMatch) {
      this.model.interfaces.push(ifMatch[1].replace(/[\.,:]$/, ''))
    }

    this.currentDocBlock = []
    this.index++
    return true
  }

  tryParseColonMethods(trimmed, originalLine) {
    if (!this.currentSection) return false

    const colonMethodMatch = trimmed.match(/^\s*(CLASS-METHODS|METHODS)\s*:/i)
    if (!colonMethodMatch) return false

    const isStatic = /CLASS-METHODS/i.test(colonMethodMatch[1])
    const blockLines = this.collectMethodBlock(originalLine)
    this.parseColonMethodBlock(blockLines, isStatic)

    this.currentDocBlock = []
    return true
  }

  collectMethodBlock(initialLine) {
    const blockLines = [initialLine]
    let j = this.index + 1
    let blockText = this.lines[this.index].trim()

    while (j < this.lines.length && !blockText.trimEnd().endsWith('.')) {
      blockLines.push(this.lines[j])
      blockText += ` ${this.lines[j].trim()}`
      j++
    }

    this.index = j > this.index ? j : this.index + 1
    return blockLines
  }

  parseColonMethodBlock(blockLines, isStatic) {
    let methodDocBlock = [...this.currentDocBlock]
    let insideParamBlock = false

    for (const blockLine of blockLines) {
      const trimmed = blockLine.trim()

      if (trimmed.startsWith('"!')) {
        methodDocBlock.push(trimmed)
        continue
      }

      if (this.isParameterKeywordLine(trimmed)) {
        insideParamBlock = true
        continue
      }

      if (insideParamBlock) {
        if (trimmed.endsWith(',') || trimmed.endsWith('.')) {
          insideParamBlock = false
        }
        continue
      }

      const methodName = this.extractMethodNameFromLine(trimmed)
      if (!methodName) continue

      const doc = methodDocBlock.length > 0
        ? AbapDocUtils.parseDocBlock(methodDocBlock)
        : AbapDocUtils.emptyDoc()

      this.addMethod({
        name: methodName,
        isStatic,
        isRedefinition: /REDEFINITION/i.test(trimmed),
        doc,
        rawSignature: trimmed
      })

      methodDocBlock = []
      if (/\b(IMPORTING|EXPORTING|CHANGING|RETURNING|RAISING)\b/i.test(trimmed)) {
        insideParamBlock = true
      }
    }
  }

  isParameterKeywordLine(trimmed) {
    return /^(IMPORTING|EXPORTING|CHANGING|RETURNING|RAISING)\s*$/i.test(trimmed)
      || /^(IMPORTING|EXPORTING|CHANGING|RETURNING|RAISING)\b/i.test(trimmed)
  }

  extractMethodNameFromLine(trimmed) {
    const mNameMatch = trimmed.match(/^(?:(?:CLASS-METHODS|METHODS)\s*:\s*)?(\w[\w~]*)/i)
    if (!mNameMatch) return null

    const candidate = mNameMatch[1]
    const forbidden = /^(IMPORTING|EXPORTING|CHANGING|RETURNING|RAISING|TYPE|REF|TO|VALUE|DEFAULT|OPTIONAL|REDEFINITION|DATA|CONSTANTS|TYPES|CLASS-METHODS|METHODS)$/i
    if (forbidden.test(candidate)) return null

    return candidate
  }

  tryParseSingleMethod(trimmed) {
    if (!this.currentSection) return false

    const methodMatch = trimmed.match(/^\s*(CLASS-METHODS|METHODS)\s+(\S+)/i)
    if (!methodMatch) return false

    const isStatic = /CLASS-METHODS/i.test(methodMatch[1])
    const methodName = methodMatch[2]
    const signature = this.collectSingleMethodSignature(trimmed)
    const doc = this.currentDocBlock.length > 0
      ? AbapDocUtils.parseDocBlock(this.currentDocBlock)
      : AbapDocUtils.emptyDoc()

    this.addMethod({
      name: methodName,
      isStatic,
      isRedefinition: /REDEFINITION/i.test(trimmed),
      doc,
      rawSignature: signature
    })

    this.currentDocBlock = []
    return true
  }

  collectSingleMethodSignature(trimmed) {
    let sigBlock = trimmed
    let j = this.index + 1
    while (j < this.lines.length && !sigBlock.trimEnd().endsWith('.')) {
      sigBlock += ` ${this.lines[j].trim()}`
      j++
    }

    this.index = j > this.index ? j : this.index + 1
    return sigBlock.replace(/\s+/g, ' ').trim()
  }

  addMethod(method) {
    this.model.sections[this.currentSection].push(method)
  }
}
