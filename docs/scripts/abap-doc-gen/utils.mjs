export class AbapDocUtils {
  static emptyDoc() {
    return { description: '', parameters: [], raising: [] }
  }

  static extractShortText(raw) {
    const fullTag = raw.match(/<p\s[^>]*>(.+?)<\/p>/)
    if (fullTag) return fullTag[1].trim()

    const malformed = raw.match(/<p\s[^>]*>(.+?)\/?p>/)
    if (malformed) return malformed[1].trim().replace(/\/$/, '')

    return raw.replace(/<[^>]*>/g, '').trim()
  }

  static parseDocBlock(lines) {
    const doc = AbapDocUtils.emptyDoc()

    for (const line of lines) {
      const content = line.replace(/^\s*"!\s?/, '')
      if (!content.trim()) continue

      const paramMatch = content.match(/^@parameter\s+(\S+)\s*\|\s*(.+)/i)
      if (paramMatch) {
        doc.parameters.push({
          name: paramMatch[1].trim(),
          description: AbapDocUtils.extractShortText(paramMatch[2])
        })
        continue
      }

      const raisingMatch = content.match(/^@raising\s+(\S+)\s*\|\s*(.+)/i)
      if (raisingMatch) {
        doc.raising.push({
          name: raisingMatch[1].trim(),
          description: AbapDocUtils.extractShortText(raisingMatch[2])
        })
        continue
      }

      const text = AbapDocUtils.extractShortText(content)
      if (text && !doc.description) {
        doc.description = text
      }
    }

    return doc
  }
}
