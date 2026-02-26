#!/usr/bin/env node
/**
 * ABAP Doc → Markdown Generator
 *
 * Parses .clas.abap files from ../src/ and generates/updates
 * markdown documentation pages under content/4.dev-objects/classes/.
 *
 * Run: node scripts/generate-abap-docs.mjs
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs'
import { join, basename } from 'node:path'

const SRC_DIR = join(import.meta.dirname, '..', '..', 'src')
const OUT_DIR = join(import.meta.dirname, '..', 'content', '4.dev-objects', 'classes', '_generated')

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Extract text from `<p class="shorttext synchronized"...>TEXT</p>` */
function extractShortText(raw) {
  // Standard case: <p ...>Text</p>
  const m = raw.match(/<p\s[^>]*>(.+?)<\/p>/)
  if (m) return m[1].trim()
  // Malformed case: missing < before /p> e.g. "Get user details/p>"
  const m2 = raw.match(/<p\s[^>]*>(.+?)\/?p>/)
  if (m2) return m2[1].trim().replace(/\/$/, '')
  // Fallback: strip all HTML tags
  return raw.replace(/<[^>]*>/g, '').trim()
}

/** Parse a single ABAP Doc block (array of `"!` lines) */
function parseDocBlock(lines) {
  const doc = { description: '', parameters: [], raising: [] }

  for (const line of lines) {
    const content = line.replace(/^\s*"!\s?/, '')
    if (!content.trim()) continue

    const paramMatch = content.match(/^@parameter\s+(\S+)\s*\|\s*(.+)/i)
    if (paramMatch) {
      doc.parameters.push({
        name: paramMatch[1].trim(),
        description: extractShortText(paramMatch[2])
      })
      continue
    }

    const raiseMatch = content.match(/^@raising\s+(\S+)\s*\|\s*(.+)/i)
    if (raiseMatch) {
      doc.raising.push({
        name: raiseMatch[1].trim(),
        description: extractShortText(raiseMatch[2])
      })
      continue
    }

    // Main description line
    const text = extractShortText(content)
    if (text && !doc.description) {
      doc.description = text
    }
  }
  return doc
}

// ---------------------------------------------------------------------------
// ABAP Class Parser
// ---------------------------------------------------------------------------

function parseAbapClass(source, filename) {
  const lines = source.split(/\r?\n/)
  const cls = {
    name: '',
    description: '',
    isAbstract: false,
    isFinal: false,
    inheritsFrom: '',
    interfaces: [],
    sections: { public: [], protected: [], private: [] }
  }

  let currentDocBlock = []
  let currentSection = null
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()

    // Collect ABAP doc lines
    if (trimmed.startsWith('"!')) {
      currentDocBlock.push(trimmed)
      i++
      continue
    }

    // CLASS ... DEFINITION
    const classDefMatch = trimmed.match(
      /^CLASS\s+(\S+)\s+DEFINITION/i
    )
    if (classDefMatch && !cls.name) {
      cls.name = classDefMatch[1].toUpperCase()
      if (currentDocBlock.length > 0) {
        const doc = parseDocBlock(currentDocBlock)
        cls.description = doc.description
      }
      currentDocBlock = []

      // Scan the definition header for modifiers
      let defBlock = ''
      let j = i
      while (j < lines.length && !lines[j].trim().match(/^\.\s*$/)) {
        defBlock += ' ' + lines[j].trim()
        j++
      }
      if (/\bABSTRACT\b/i.test(defBlock)) cls.isAbstract = true
      if (/\bFINAL\b/i.test(defBlock)) cls.isFinal = true
      const inheritMatch = defBlock.match(/INHERITING\s+FROM\s+(\S+)/i)
      if (inheritMatch) cls.inheritsFrom = inheritMatch[1].toUpperCase()

      i++
      continue
    }

    // IMPLEMENTATION marker – stop parsing
    if (/^CLASS\s+\S+\s+IMPLEMENTATION/i.test(trimmed)) {
      break
    }

    // Section markers
    if (/^\s*PUBLIC\s+SECTION\s*\./i.test(trimmed)) {
      currentSection = 'public'
      currentDocBlock = []
      i++
      continue
    }
    if (/^\s*PROTECTED\s+SECTION\s*\./i.test(trimmed)) {
      currentSection = 'protected'
      currentDocBlock = []
      i++
      continue
    }
    if (/^\s*PRIVATE\s+SECTION\s*\./i.test(trimmed)) {
      currentSection = 'private'
      currentDocBlock = []
      i++
      continue
    }

    // INTERFACES
    if (currentSection && /^\s*INTERFACES\s+/i.test(trimmed)) {
      const ifMatch = trimmed.match(/INTERFACES\s+(\S+)/i)
      if (ifMatch) {
        cls.interfaces.push(ifMatch[1].replace(/[\.,:]$/, ''))
      }
      currentDocBlock = []
      i++
      continue
    }

    // METHODS: / CLASS-METHODS: (colon-style — multiple methods in one block)
    // e.g. METHODS: constructor IMPORTING ..., other_method IMPORTING ...
    const colonMethodMatch = trimmed.match(/^\s*(CLASS-METHODS|METHODS)\s*:/i)
    if (colonMethodMatch && currentSection) {
      const isStatic = /CLASS-METHODS/i.test(colonMethodMatch[1])

      // Collect entire block until final period
      let blockLines = [line]
      let j = i + 1
      let blockText = trimmed
      while (j < lines.length && !blockText.trimEnd().endsWith('.')) {
        blockLines.push(lines[j])
        blockText += ' ' + lines[j].trim()
        j++
      }

      // Now parse each method inside this block
      // We need to re-scan line by line to capture doc blocks per method
      let methodDocBlock = [...currentDocBlock]
      let insideParamBlock = false
      for (let k = 0; k < blockLines.length; k++) {
        const bLine = blockLines[k].trim()

        if (bLine.startsWith('"!')) {
          methodDocBlock.push(bLine)
          continue
        }

        // Track if we are inside IMPORTING/EXPORTING/CHANGING/RETURNING/RAISING
        if (/^(IMPORTING|EXPORTING|CHANGING|RETURNING|RAISING)\s*$/i.test(bLine) ||
            /^(IMPORTING|EXPORTING|CHANGING|RETURNING|RAISING)\b/i.test(bLine)) {
          insideParamBlock = true
          continue
        }

        // If inside a param block, skip parameter lines
        if (insideParamBlock) {
          // A line that starts with a comma or period ends a method, or a new doc block starts
          if (bLine.endsWith(',') || bLine.endsWith('.')) {
            insideParamBlock = false
          }
          continue
        }

        // Match a method name (word that is NOT a keyword)
        const mNameMatch = bLine.match(
          /^(?:(?:CLASS-METHODS|METHODS)\s*:\s*)?(\w[\w~]*)/i
        )
        if (mNameMatch) {
          const mName = mNameMatch[1]
          // Skip ABAP keywords
          if (/^(IMPORTING|EXPORTING|CHANGING|RETURNING|RAISING|TYPE|REF|TO|VALUE|DEFAULT|OPTIONAL|REDEFINITION|DATA|CONSTANTS|TYPES)$/i.test(mName)) {
            insideParamBlock = true
            continue
          }
          // Skip the METHODS: keyword itself
          if (/^(CLASS-METHODS|METHODS)$/i.test(mName)) {
            continue
          }

          const isRedefinition = /REDEFINITION/i.test(bLine)
          const doc = methodDocBlock.length > 0
            ? parseDocBlock(methodDocBlock)
            : { description: '', parameters: [], raising: [] }

          cls.sections[currentSection].push({
            name: mName,
            isStatic,
            isRedefinition,
            doc,
            rawSignature: bLine
          })
          methodDocBlock = []

          // Check if this method name line also has IMPORTING etc. on same line
          if (/\b(IMPORTING|EXPORTING|CHANGING|RETURNING|RAISING)\b/i.test(bLine)) {
            insideParamBlock = true
          }
        } else if (bLine !== '' && !bLine.startsWith('"!')) {
          // Not a doc line and not a method name — could be param continuation
          // don't clear doc block for empty lines
        }
      }

      currentDocBlock = []
      i = j > i ? j : i + 1
      continue
    }

    // METHOD / CLASS-METHODS declaration (single method, no colon)
    const methodMatch = trimmed.match(/^\s*(CLASS-METHODS|METHODS)\s+(\S+)/i)
    if (methodMatch && currentSection) {
      const isStatic = /CLASS-METHODS/i.test(methodMatch[1])
      const methodName = methodMatch[2]
      const isRedefinition = /REDEFINITION/i.test(trimmed)

      // Collect the full method signature (may span multiple lines)
      let sigBlock = trimmed
      let j = i + 1
      while (j < lines.length && !sigBlock.trimEnd().endsWith('.')) {
        sigBlock += ' ' + lines[j].trim()
        j++
      }

      // Parse parameters from signature
      const sigParams = []
      const sigRegex = /\b(IMPORTING|EXPORTING|CHANGING|RETURNING)\b/gi
      let sigParts = sigBlock
      // Extract IMPORTING/EXPORTING/CHANGING/RETURNING params
      const importMatches = [...sigBlock.matchAll(
        /(?:IMPORTING|EXPORTING|CHANGING|RETURNING)\s+((?:VALUE\s*\(\s*)?(\S+?)(?:\s*\))?\s+TYPE\s+(?:REF\s+TO\s+)?(\S+))/gi
      )]

      // Parse doc block
      const doc = currentDocBlock.length > 0
        ? parseDocBlock(currentDocBlock)
        : { description: '', parameters: [], raising: [] }

      cls.sections[currentSection].push({
        name: methodName,
        isStatic,
        isRedefinition,
        doc,
        rawSignature: sigBlock.replace(/\s+/g, ' ').trim()
      })

      currentDocBlock = []
      i = j > i ? j : i + 1
      continue
    }

    // DATA / CONSTANTS
    const dataMatch = trimmed.match(/^\s*(CLASS-DATA|DATA|CONSTANTS)\s+(\S+)/i)
    if (dataMatch && currentSection) {
      // We skip data/constants for now, but clear doc block
      currentDocBlock = []
      i++
      continue
    }

    // TYPES, ALIASES, etc. — skip but clear doc block
    if (/^\s*(TYPES|ALIASES)/i.test(trimmed)) {
      currentDocBlock = []
    }

    // Any other line — if it's not a doc comment, clear the block
    if (!trimmed.startsWith('"!') && trimmed !== '') {
      currentDocBlock = []
    }

    i++
  }

  return cls
}

// ---------------------------------------------------------------------------
// Markdown Generator
// ---------------------------------------------------------------------------

function generateMarkdown(cls) {
  const lines = []

  // Frontmatter
  lines.push('---')
  lines.push(`title: ${cls.name}`)
  lines.push(`description: "Auto-generated API reference for ${cls.name}"`)
  lines.push('---')
  lines.push('')

  // Header
  lines.push(`# ${cls.name}`)
  lines.push('')
  if (cls.description) {
    lines.push(`> ${cls.description}`)
    lines.push('')
  }

  // Class info
  const badges = []
  if (cls.isAbstract) badges.push('Abstract')
  if (cls.isFinal) badges.push('Final')
  if (badges.length > 0) {
    lines.push(`**Modifiers:** ${badges.join(', ')}`)
    lines.push('')
  }
  if (cls.inheritsFrom) {
    lines.push(`**Inherits from:** \`${cls.inheritsFrom}\``)
    lines.push('')
  }
  if (cls.interfaces.length > 0) {
    lines.push('**Interfaces:**')
    for (const intf of cls.interfaces) {
      lines.push(`- \`${intf}\``)
    }
    lines.push('')
  }

  // Methods per section
  for (const [sectionName, sectionLabel] of [
    ['public', 'Public Methods'],
    ['protected', 'Protected Methods'],
    ['private', 'Private Methods']
  ]) {
    const methods = cls.sections[sectionName]
    if (methods.length === 0) continue

    lines.push(`## ${sectionLabel}`)
    lines.push('')

    for (const method of methods) {
      const staticBadge = method.isStatic ? ' `static`' : ''
      const redefBadge = method.isRedefinition ? ' `redefinition`' : ''
      lines.push(`### ${method.name}${staticBadge}${redefBadge}`)
      lines.push('')

      if (method.doc.description) {
        lines.push(method.doc.description)
        lines.push('')
      }

      if (method.doc.parameters.length > 0) {
        lines.push('| Parameter | Description |')
        lines.push('|-----------|-------------|')
        for (const p of method.doc.parameters) {
          lines.push(`| \`${p.name}\` | ${p.description} |`)
        }
        lines.push('')
      }

      if (method.doc.raising.length > 0) {
        lines.push('**Exceptions:**')
        for (const r of method.doc.raising) {
          lines.push(`- \`${r.name}\` — ${r.description}`)
        }
        lines.push('')
      }
    }
  }

  // Source link
  lines.push('---')
  lines.push('')
  lines.push(`*Auto-generated from [${cls.name.toLowerCase()}.clas.abap](https://github.com/miggi92/odata-fw/blob/master/src/${cls.name.toLowerCase()}.clas.abap)*`)
  lines.push('')

  return lines.join('\n')
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  if (!existsSync(OUT_DIR)) {
    mkdirSync(OUT_DIR, { recursive: true })
  }

  const abapFiles = readdirSync(SRC_DIR)
    .filter(f => f.endsWith('.clas.abap') && !f.includes('.testclasses'))

  console.log(`Found ${abapFiles.length} ABAP class files in ${SRC_DIR}`)

  for (const file of abapFiles) {
    const source = readFileSync(join(SRC_DIR, file), 'utf-8')
    const cls = parseAbapClass(source, file)

    if (!cls.name) {
      console.warn(`  ⚠ Could not parse class name from ${file}, skipping`)
      continue
    }

    const md = generateMarkdown(cls)
    const outFile = join(OUT_DIR, `${cls.name}.md`)
    writeFileSync(outFile, md, 'utf-8')
    console.log(`  ✔ ${cls.name} → ${basename(outFile)}`)
  }

  console.log('\nDone! Generated files are in:')
  console.log(`  ${OUT_DIR}`)
}

main()
