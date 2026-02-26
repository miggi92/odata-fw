#!/usr/bin/env node

/**
 * Entry point for ABAP Doc generation.
 *
 * Maintainer docs:
 * - ./abap-doc-gen/README.md
 */

import { join } from 'node:path'
import { GeneratorApp } from './abap-doc-gen/app.mjs'

const sourceDir = join(import.meta.dirname, '..', '..', 'src')
const outputDir = join(import.meta.dirname, '..', 'content', '4.dev-objects', 'classes', '_generated')

new GeneratorApp({ sourceDir, outputDir }).run()
