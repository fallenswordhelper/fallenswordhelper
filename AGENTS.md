# AGENTS.md - Coding Agent Guidelines

## Build/Test Commands

- **Development**:
  - `npm run watch` - Development server with live reload (keeps running)
  - `npm run rollup-dev` - Development build for testing
  - `npm run cleandev` - Clean up development build artifacts
  - `npm run eslint` - Lint all JavaScript files
  - `npm run fix` - Auto-fix ESLint issues
  - `npm run test` - Run ESLint (no unit tests, this IS the test command)
- **Production** (deploy only):
  - `npm run build` - Production build (creates userscript for deployment)
  - `npm run rollup` - Same as build
- **Other**:
  - `npm run knip` - Find unused files/dependencies

## Code Style

- **ES6 modules only** - Use `export default` for single exports, named exports for utilities
- **camelCase** - Functions, variables, file names (e.g., `isFunction.js`, `querySelector.js`)
- **No TypeScript** - Pure JavaScript with JSDoc if needed
- **Svelte 5** - Use `$state()`, `$bindable()`, `$effect()` syntax for components
- **Single-purpose functions** - Each utility should do one thing well
- **Imports** - Always use relative paths, check existing utilities in `src/modules/common/` first
- **File prefixes** - `da*` for data access, `inject*` for DOM injection, `mount*.svelte.js` for Svelte mounting
- **No comments** - Code should be self-documenting unless absolutely necessary
- **Error handling** - Use try/catch sparingly, prefer graceful degradation
- **Prettier/ESLint** - Automatic formatting via pre-commit hooks (2 spaces, single quotes, trailing commas)

## Project Patterns

- Check `src/modules/common/` for existing utilities before creating new ones
- Modal components must use exact patterns from CLAUDE.md for proper closing behavior
- Greasemonkey userscript targeting Fallen Sword browser game
