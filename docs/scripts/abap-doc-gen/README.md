# ABAP Doc Generator (Module Overview)

This folder contains the modular implementation of the ABAP Doc → Markdown generator used by:

- `docs/scripts/generate-abap-docs.mjs`

## Architecture

### `app.mjs`
- Entry for generation logic (`GeneratorApp`)
- Handles file IO, directory creation, source file discovery, and output writes
- Coordinates parser + renderer

### `parser.mjs`
- Parses `.clas.abap` source into an in-memory class model
- Extracts:
  - class metadata (name, abstract/final, inheritance, interfaces)
  - methods per section (`public`, `protected`, `private`)
  - ABAP Doc blocks (`"!`, `@parameter`, `@raising`)
- Supports both method declaration styles:
  - `METHODS method_name ...`
  - `METHODS: method1 ..., method2 ...`

### `renderer.mjs`
- Converts the parsed class model into Markdown
- Renders frontmatter, class metadata, method sections, parameter tables, and exception lists

### `utils.mjs`
- Shared ABAP Doc helpers:
  - `extractShortText()` for HTML-ish shorttext extraction
  - `parseDocBlock()` for ABAP Doc parsing
  - `emptyDoc()` baseline doc shape

### `constants.mjs`
- Shared section order + labels used by parser/renderer

## Data Flow

1. `GeneratorApp` discovers ABAP class files
2. `AbapClassParser` parses each file into a model
3. `MarkdownRenderer` renders the model to Markdown
4. `GeneratorApp` writes files to `content/4.dev-objects/classes/_generated`

## Usage

From `docs/`:

- `node scripts/generate-abap-docs.mjs`

Or via npm scripts:

- `pnpm run generate:abap-docs`
- `pnpm run build` / `pnpm run generate` (includes ABAP docs generation)

## Extension Points

### Add new ABAP Doc tags
- Update `AbapDocUtils.parseDocBlock()` in `utils.mjs`
- Update rendering in `renderer.mjs`

### Change output structure
- Adjust `MarkdownRenderer` in `renderer.mjs`
- Keep model structure stable to avoid parser coupling

### Filter generated classes
- Update `GeneratorApp.getClassFiles()` in `app.mjs`

### Add additional output formats (e.g. JSON)
- Reuse `AbapClassParser`
- Add a second renderer class (e.g. `JsonRenderer`)

## Maintenance Notes

- Prefer keeping parser and renderer independent.
- Keep `AbapClassModel` backwards-compatible when possible.
- If parser behavior changes, validate by running:
  - `node scripts/generate-abap-docs.mjs`
