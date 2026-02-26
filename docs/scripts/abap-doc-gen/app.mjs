import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs'
import { join, basename } from 'node:path'

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
    const files = this.getClassFiles()
    const generatedClassNames = []

    console.log(`Found ${files.length} ABAP class files in ${this.sourceDir}`)

    for (const file of files) {
      const className = this.generateFile(file)
      if (className) {
        generatedClassNames.push(className)
      }
    }

    this.generateNavigationFile()
    this.generateIndexPage(generatedClassNames)

    console.log('\nDone! Generated files are in:')
    console.log(`  ${this.outputDir}`)
  }

  ensureOutputDir() {
    if (!existsSync(this.outputDir)) {
      mkdirSync(this.outputDir, { recursive: true })
    }
  }

  getClassFiles() {
    return readdirSync(this.sourceDir)
      .filter(file => file.endsWith('.clas.abap') && !file.includes('.testclasses'))
  }

  generateFile(file) {
    const source = readFileSync(join(this.sourceDir, file), 'utf-8')
    const model = this.parser.parse(source)

    if (!model.name) {
      console.warn(`  ⚠ Could not parse class name from ${file}, skipping`)
      return null
    }

    const markdown = this.renderer.render(model)
    const outFile = join(this.outputDir, `${model.name}.md`)

    writeFileSync(outFile, markdown, 'utf-8')
    console.log(`  ✔ ${model.name} → ${basename(outFile)}`)

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

  generateIndexPage(classNames) {
    const sortedClassNames = [...classNames].sort((a, b) => a.localeCompare(b))

    const lines = [
      '---',
      'title: API Reference (auto-generated)',
      'description: Auto-generated ABAP API reference pages extracted from source code comments.',
      '---',
      '',
      'This section is generated from ABAP Doc comments in the `src/*.clas.abap` files.',
      '',
      '## Classes',
      ''
    ]

    for (const className of sortedClassNames) {
      const slug = className.toLowerCase()
      lines.push(`- [${className}](/dev-objects/classes/_generated/${slug})`)
    }

    lines.push('')

    const indexPath = join(this.outputDir, 'index.md')
    writeFileSync(indexPath, `${lines.join('\n')}`, 'utf-8')
  }
}
