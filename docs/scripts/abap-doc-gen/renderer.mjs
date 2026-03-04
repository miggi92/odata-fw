import { SECTION_LABELS, SECTION_ORDER } from './constants.mjs'

export class MarkdownRenderer {
  buildExternalLink(url, label = url) {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`
  }

  linkifyUrls(text) {
    return text.replace(/https?:\/\/[^\s<>()]+/g, (rawUrl, offset, source) => {
      if (offset >= 2 && source.slice(offset - 2, offset) === '](') {
        return rawUrl
      }

      const before = source.slice(Math.max(0, offset - 6), offset).toLowerCase()
      if (before === 'href="' || before === "href='") {
        return rawUrl
      }

      let url = rawUrl
      let trailing = ''
      while (/[.,;:!?]$/.test(url)) {
        trailing = `${url.slice(-1)}${trailing}`
        url = url.slice(0, -1)
      }

      return `${this.buildExternalLink(url)}${trailing}`
    })
  }

  render(model, options = {}) {
    const lines = []

    lines.push('---')
    lines.push(`title: ${model.name}`)
    lines.push(`description: "Auto-generated API reference for ${model.objectType} ${model.name}"`)
    lines.push('---')
    lines.push('')

    lines.push(`# ${model.name}`)
    lines.push('')

    if (model.description) {
      for (const line of model.description.split('\n')) {
        lines.push(`> ${this.linkifyUrls(line)}`)
      }
      lines.push('')
    }

    this.renderClassInfo(lines, model, options)
    this.renderMethods(lines, model)
    this.renderSourceLink(lines, model)

    return lines.join('\n')
  }

  renderClassInfo(lines, model, options) {
    lines.push(`**Type:** ${model.objectType === 'interface' ? 'Interface' : 'Class'}`)
    lines.push('')

    if (model.objectType !== 'class') {
      return
    }

    const modifiers = []
    if (model.isAbstract) modifiers.push('Abstract')
    if (model.isFinal) modifiers.push('Final')

    if (modifiers.length > 0) {
      lines.push(`**Modifiers:** ${modifiers.join(', ')}`)
      lines.push('')
    }

    if (model.inheritsFrom) {
      lines.push(`**Inherits from:** \`${model.inheritsFrom}\``)
      lines.push('')
    }

    if (model.interfaces.length > 0) {
      const localInterfaceNames = options.localInterfaceNames ?? new Set()

      lines.push('**Interfaces:**')
      for (const intf of model.interfaces) {
        if (localInterfaceNames.has(intf)) {
          lines.push(`- [\`${intf}\`](/dev-objects/classes/_generated/${intf.toLowerCase()})`)
        } else {
          lines.push(`- \`${intf}\``)
        }
      }
      lines.push('')
    }
  }

  renderMethods(lines, model) {
    for (const sectionName of SECTION_ORDER) {
      const methods = model.sections[sectionName]
      if (!methods.length) continue

      lines.push(`## ${SECTION_LABELS[sectionName]}`)
      lines.push('')

      for (const method of methods) {
        this.renderMethod(lines, method)
      }
    }
  }

  renderMethod(lines, method) {
    const staticBadge = method.isStatic ? ' `static`' : ''
    const redefBadge = method.isRedefinition ? ' `redefinition`' : ''

    lines.push(`### ${method.name}${staticBadge}${redefBadge}`)
    lines.push('')

    if (method.doc.description) {
      for (const line of method.doc.description.split('\n')) {
        lines.push(this.linkifyUrls(line))
      }
      lines.push('')
    }

    if (method.doc.parameters.length > 0) {
      lines.push('| Parameter | Description |')
      lines.push('|-----------|-------------|')
      for (const param of method.doc.parameters) {
        lines.push(`| \`${param.name}\` | ${this.linkifyUrls(param.description)} |`)
      }
      lines.push('')
    }

    if (method.doc.raising.length > 0) {
      lines.push('**Exceptions:**')
      for (const error of method.doc.raising) {
        lines.push(`- \`${error.name}\` — ${this.linkifyUrls(error.description)}`)
      }
      lines.push('')
    }
  }

  renderSourceLink(lines, model) {
    const sourcePath = model.sourceRelativePath ?? `${model.name.toLowerCase()}.clas.abap`
    const sourceUrl = `https://github.com/miggi92/odata-fw/blob/master/src/${sourcePath}`

    lines.push('---')
    lines.push('')
    lines.push(`*Auto-generated from ${this.buildExternalLink(sourceUrl, sourcePath)}*`)
    lines.push('')
  }
}
