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

    console.log(`Found ${files.length} ABAP class files in ${this.sourceDir}`)

    for (const file of files) {
      this.generateFile(file)
    }

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
      return
    }

    const markdown = this.renderer.render(model)
    const outFile = join(this.outputDir, `${model.name}.md`)

    writeFileSync(outFile, markdown, 'utf-8')
    console.log(`  ✔ ${model.name} → ${basename(outFile)}`)
  }
}
