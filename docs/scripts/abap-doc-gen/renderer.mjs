import { SECTION_LABELS, SECTION_ORDER } from './constants.mjs'

export class MarkdownRenderer {
  render(model) {
    const lines = []

    lines.push('---')
    lines.push(`title: ${model.name}`)
    lines.push(`description: "Auto-generated API reference for ${model.name}"`)
    lines.push('---')
    lines.push('')

    lines.push(`# ${model.name}`)
    lines.push('')

    if (model.description) {
      lines.push(`> ${model.description}`)
      lines.push('')
    }

    this.renderClassInfo(lines, model)
    this.renderMethods(lines, model)
    this.renderSourceLink(lines, model)

    return lines.join('\n')
  }

  renderClassInfo(lines, model) {
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
      lines.push('**Interfaces:**')
      for (const intf of model.interfaces) {
        lines.push(`- \`${intf}\``)
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
      lines.push(method.doc.description)
      lines.push('')
    }

    if (method.doc.parameters.length > 0) {
      lines.push('| Parameter | Description |')
      lines.push('|-----------|-------------|')
      for (const param of method.doc.parameters) {
        lines.push(`| \`${param.name}\` | ${param.description} |`)
      }
      lines.push('')
    }

    if (method.doc.raising.length > 0) {
      lines.push('**Exceptions:**')
      for (const error of method.doc.raising) {
        lines.push(`- \`${error.name}\` — ${error.description}`)
      }
      lines.push('')
    }
  }

  renderSourceLink(lines, model) {
    lines.push('---')
    lines.push('')
    lines.push(`*Auto-generated from [${model.name.toLowerCase()}.clas.abap](https://github.com/miggi92/odata-fw/blob/master/src/${model.name.toLowerCase()}.clas.abap)*`)
    lines.push('')
  }
}
