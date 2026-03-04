import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs'
import { join, basename, relative } from 'node:path'

import { AbapClassParser } from './parser.mjs'
import { MarkdownRenderer } from './renderer.mjs'

export class GeneratorApp {
  constructor({ sourceDir, outputDir }) {
    this.sourceDir = sourceDir
    this.outputDir = outputDir
    this.parser = new AbapClassParser()
    this.renderer = new MarkdownRenderer()
  }

  run() {
    this.ensureOutputDir()
    const files = this.getSourceFiles()
    const models = []
    const generatedClassNames = []
    const generatedInterfaceNames = []

    console.log(`Found ${files.length} ABAP class/interface files in ${this.sourceDir}`)

    for (const file of files) {
      const model = this.parseFile(file)
      if (model) {
        models.push(model)
      }
    }

    const localInterfaceNames = new Set(
      models
        .filter((model) => model.objectType === 'interface')
        .map((model) => model.name)
    )

    for (const model of models) {
      const objectName = this.generateFile(model, localInterfaceNames)
      if (!objectName) continue

      if (model.objectType === 'interface') {
        generatedInterfaceNames.push(objectName)
      } else {
        generatedClassNames.push(objectName)
      }
    }

    this.generateNavigationFile()
    this.generateIndexPage(generatedClassNames, generatedInterfaceNames)

    console.log('\nDone! Generated files are in:')
    console.log(`  ${this.outputDir}`)
  }

  ensureOutputDir() {
    if (!existsSync(this.outputDir)) {
      mkdirSync(this.outputDir, { recursive: true })
    }
  }

  getSourceFiles() {
    return this.collectSourceFiles(this.sourceDir)
  }

  collectSourceFiles(directory) {
    const entries = readdirSync(directory, { withFileTypes: true })
    const files = []

    for (const entry of entries) {
      const fullPath = join(directory, entry.name)

      if (entry.isDirectory()) {
        files.push(...this.collectSourceFiles(fullPath))
        continue
      }

      if (
        entry.isFile()
        && ((entry.name.endsWith('.clas.abap') && !entry.name.includes('.testclasses')) || entry.name.endsWith('.intf.abap'))
      ) {
        files.push(fullPath)
      }
    }

    return files
  }

  parseFile(filePath) {
    const source = readFileSync(filePath, 'utf-8')
    const model = this.parser.parse(source)
    const relativeFilePath = relative(this.sourceDir, filePath).replace(/\\/g, '/')
    model.sourceRelativePath = relativeFilePath

    if (!model.name) {
      console.warn(`  ⚠ Could not parse object name from ${relativeFilePath}, skipping`)
      return null
    }

    return model
  }

  generateFile(model, localInterfaceNames) {
    const markdown = this.renderer.render(model, { localInterfaceNames })
    const outFile = join(this.outputDir, `${model.name}.md`)

    writeFileSync(outFile, markdown, 'utf-8')
    console.log(`  ✔ ${model.objectType.toUpperCase()} ${model.name} → ${basename(outFile)}`)

    return model.name
  }

  generateNavigationFile() {
    const navigationContent = [
      'title: API Reference (auto-generated)',
      'icon: i-lucide-cpu',
      'defaultOpen: false',
      ''
    ].join('\n')

    const navigationPath = join(this.outputDir, '.navigation.yaml')
    writeFileSync(navigationPath, navigationContent, 'utf-8')
  }

  generateIndexPage(classNames, interfaceNames) {
    const sortedClassNames = [...classNames].sort((a, b) => a.localeCompare(b))
    const sortedInterfaceNames = [...interfaceNames].sort((a, b) => a.localeCompare(b))

    const lines = [
      '---',
      'title: API Reference (auto-generated)',
      'description: Auto-generated ABAP API reference pages extracted from source code comments.',
      '---',
      '',
      'This section is generated from ABAP Doc comments in `src/**/*.clas.abap` and `src/**/*.intf.abap` files.',
      '',
      '## Classes',
      ''
    ]

    for (const className of sortedClassNames) {
      const slug = className.toLowerCase()
      lines.push(`- [${className}](/dev-objects/classes/_generated/${slug})`)
    }

    lines.push('')
    lines.push('## Interfaces')
    lines.push('')

    for (const interfaceName of sortedInterfaceNames) {
      const slug = interfaceName.toLowerCase()
      lines.push(`- [${interfaceName}](/dev-objects/classes/_generated/${slug})`)
    }

    lines.push('')

    const indexPath = join(this.outputDir, 'index.md')
    writeFileSync(indexPath, `${lines.join('\n')}`, 'utf-8')
  }
}
