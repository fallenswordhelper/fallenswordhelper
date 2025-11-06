# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fallen Sword Helper is a Greasemonkey/Tampermonkey userscript that enhances the Fallen Sword browser game experience. It removes repetitive tasks, presents information at a glance, enhances social aspects, and creates shortcuts for common game actions.

## Build System & Development Commands

### Primary Build Commands

- `npm run build` - Production build using Rollup (aliased to `npm run rollup`)
- `npm run rollup` - Production build that creates the final userscript
- `npm run rollup-dev` - Development build with source maps (MUST run `npm run cleandev` after testing)

### Development Server Commands (Developer Managed - DO NOT RUN)

- `npm run watch` - Development server with live reload (developer runs this in separate terminal)
- `npm run esbuild` - One-time ESBuild production build
- `npm run esdev` - One-time ESBuild development build
- `npm run ws` - Simple static web server

### Code Quality Commands

- `npm run test` - Runs ESLint (same as `npm run eslint`)
- `npm run eslint` - Lint all JavaScript files with ESLint
- `npm run fix` - Auto-fix ESLint issues
- `npm run knip` - Find unused files and dependencies

### Version Management & Cleanup

- `npm run patch` - Increment patch version and build
- `npm run minor` - Increment minor version and build
- `npm run cleandev` - Clean development artifacts (REQUIRED after `npm run rollup-dev`)

## Code Architecture

### Entry Points

- `src/calfSystem.js` - Main entry point that imports CSS and dispatches to chrome/dispatch
- `src/fallenswordhelper.user.js` - Userscript wrapper that loads the main module

### Core Architecture

- **Dispatch System**: `src/modules/chrome/dispatch.js` handles page routing and feature initialization
- **Page Switcher**: `src/modules/chrome/pageSwitcher/` determines which features to load based on current page
- **Module Structure**: Features organized by game area (arena, guild, profile, etc.)

### Key Module Categories

#### Data Access Layer (`_dataAccess/`)

- AJAX data fetching and API interactions (files prefixed with `da`)
- Export utilities for game data
- Fallback handlers for failed requests

#### UI Enhancement (`chrome/`)

- Page navigation and menu systems
- Event handling and keyboard shortcuts
- Notifications and alerts
- Widget injection

#### Game Features

- **Arena**: Combat setup and participant management
- **Guild**: Member management, inventory, combat tracking
- **Profile**: Equipment management, buff handling, statistics
- **Notepad**: Data tables and tracking tools (inventory, combat logs, etc.)
- **Quickbuff**: Automated buffing system
- **Settings**: Configuration UI using Liquid templates

#### Utility Systems

- **Common**: Shared utilities, DOM manipulation, element creation
  - Always check `src/modules/common/` for existing utility functions before creating new ones
  - Common utilities include: DOM manipulation, array/object helpers, player data extraction, etc.
  - Examples: `numberIsNaN`, `querySelector`, `getPlayers`, `setTipped`, `lastActivity`
- **Ajax**: HTTP request handling and retry logic
- **Modal**: Svelte-based modal dialog system
- **System**: Core utilities, storage, and configuration

### Technology Stack

- **Build**: Rollup for production, ESBuild for development
- **UI Framework**: Svelte 5 for interactive components
- **Templates**: Liquid.js for settings HTML generation
- **Styling**: CSS modules with CSSO minification
- **Storage**: IndexedDB via idb library
- **Analytics**: PostHog integration with Honeybadger error tracking

### Development Patterns

- ES6 modules with tree shaking
- Utility-first approach with single-purpose functions
- Svelte components for complex UI elements
- CSS-in-JS avoided in favor of separate CSS files
- Greasemonkey API integration for browser userscript features

### File Naming Conventions

- `da*` files: Data access layer functions
- `inject*` files: DOM injection and page enhancement
- `*.svelte` files: Svelte components
- `*.css` files: Scoped styling
- `mount*.svelte.js` files: Svelte component mounting utilities

### Key Configuration Files

- `eslint.config.js` - ESLint configuration with Svelte support
- `knip.json` - Dead code analysis configuration
- `scripts/getRollupConfig.js` - Main build configuration
- `src/modules/support/constants.js` - Application constants

## Development Workflow

### Making Changes

- Always create a new branch for changes instead of committing directly to master
- Use descriptive branch names (e.g., `fix-guild-stamina-nan`, `feature-new-widget`)
- Commit changes to the new branch and push to remote
- Submit changes via Pull Request for code review and integration

### Branch and Commit Guidelines

- Branch from master for new features or fixes
- Make focused commits with clear, descriptive messages
- Use `npm run watch` for live development and testing
- ESLint runs automatically via pre-commit hooks
- Prettier formatting happens automatically via VSCode extension
- Push branches to origin and create PRs for all changes

### Version Management

- Version bumps handled by maintainers using `npm run patch` or `npm run minor`
- Git tags created automatically with version numbers (no changelog file)
- Automated build and push to GitHub on version updates

### Code Quality

- ESLint configuration with Svelte support runs automatically on commit
- Prettier configuration includes plugins for Svelte and Liquid templates
- Pre-commit hooks ensure code quality before commits
- No manual linting or formatting commands needed during development

## Modal Implementation Patterns

### Working Modal Structure

Modals in this codebase follow a specific pattern that must be followed exactly for proper functionality:

#### Mount Function Pattern (`mountModal.svelte.js`)

```javascript
import { mount } from 'svelte';
import ModalComponent from './ModalComponent.svelte';

const props = $state({ visible: true }); // REQUIRED: Use $state() for reactivity
let thisModal = 0; // REQUIRED: Singleton pattern

export default function mountModal() {
  if (thisModal) {
    props.visible = true; // Reshow existing modal
  } else {
    thisModal = mount(ModalComponent, { props, target: document.body });
  }
}
```

#### Modal Component Pattern (`ModalComponent.svelte`)

```svelte
<script>
  import sendEvent from '../../analytics/sendEvent';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import ContentComponent from './ContentComponent.svelte';

  let { visible = $bindable(true) } = $props(); // REQUIRED: Bindable prop

  function close() {
    sendEvent('Category', 'Close'); // Analytics tracking
    visible = false; // REQUIRED: Set to false, don't destroy
  }
</script>

<ModalTitled {close} {visible}>
  {#snippet title()}
    Modal Title <!-- Good practice: Always provide a title -->
  {/snippet}
  <ContentComponent />
</ModalTitled>
```

#### Essential Requirements for Modal Closing

- **Mount**: Use `$state({ visible: true })` and singleton pattern - this enables proper reactivity
- **Modal**: Use `let { visible = $bindable(true) } = $props()` - this creates proper binding
- **Close**: Define own `close()` function that sets `visible = false` - don't call destroy()

#### Common Mistakes to Avoid

- ❌ Using regular object `{ visible: true }` instead of `$state()` (breaks reactivity)
- ❌ Using `export let close; export let visible;` instead of bindable props (breaks binding)
- ❌ Calling `modal.$destroy()` in close function (conflicts with framework)
- ❌ Not using singleton pattern in mount function (creates multiple instances)

#### File Structure

```
modalName/
├── ModalName.svelte           # Main content component
├── ModalNameModal.svelte      # Modal wrapper with ModalTitled
└── mountModalName.svelte.js   # Mount utility
```
