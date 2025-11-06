# Automated Testing Suite Plan for Fallen Sword Helper

## Executive Summary

This document outlines a two-phase approach to automated testing for the Fallen Sword Helper userscript:

- **Phase 1**: Pure function unit testing (no mocks, no DOM simulation)
- **Phase 2**: End-to-end testing against the real Fallen Sword game

This strategy maximizes value while minimizing complexity and maintenance overhead.

## Current State Analysis

### Existing Testing Infrastructure

- **Current**: ESLint-only (`npm run test` = `npm run eslint`)
- **Code Quality**: Pre-commit hooks with ESLint and Prettier
- **Module Count**: 100+ utility functions, 50+ feature modules, 15+ Svelte components
- **Architecture**: ES6 modules with clear boundaries and single-purpose functions

### Key Insight

Analysis of the codebase reveals **50+ pure utility functions** in `src/modules/common/` and `src/modules/system/` that require absolutely no external dependencies, DOM access, or browser APIs. These functions are:

- **Highly testable**: Direct input → output with no side effects
- **Business critical**: Used throughout the entire application
- **Zero maintenance**: Tests never break due to external changes
- **Fast execution**: No setup overhead, instant feedback

### Testing Philosophy: Pure Functions Only

**No Mocking Strategy**: Rather than building complex mocks for DOM, browser APIs, game globals, and async operations, this plan focuses on what can be tested reliably and simply - pure functions.

**Benefits**:

- Zero maintenance overhead on test infrastructure
- Tests run in milliseconds
- 100% reliable - no flaky tests
- Easy for any developer to write and understand
- Immediate value without complex setup

## Phase 1: Unit Testing Architecture

### Single-Layer Strategy: Pure Unit Tests

**Scope**: Pure functions with zero external dependencies  
**Tool**: Vitest (ESM-native, minimal configuration)  
**Environment**: Node.js (no DOM libraries needed)  
**Coverage Target**: 50+ pure utility functions

### Pure Function Categories

#### 1. Mathematical & Logic Functions (10 functions)

- `sum.js` - Array reduction
- `round.js` - Number rounding with precision
- `bitwiseAnd.js` - Bitwise AND operation
- `numberIsNaN.js` - NaN validation
- `testRange.js` - Range validation
- `testQuant.js` - Quantity validation
- `splitTime.js` - Time splitting into days/hours/mins/secs
- `partial.js` - Partial function application
- `alpha.js` - Alphabetical sorting
- `remainingPages.js` - Pagination calculation

#### 2. String Processing Functions (12 functions)

- `trim.js` - String trimming
- `csvSplit.js` - CSV parsing
- `replaceDoubleSpace.js` - Whitespace normalization
- `toLowerCase.js` - Case conversion
- `regExpExec.js` - Regex execution
- `regExpFirstCapture.js` - Regex capture extraction
- `regExpGroups.js` - Named regex groups
- `trimTitanName.js` - Name trimming
- `containsText.js` - Text search
- `includesText.js` - Text inclusion check
- `includes.js` - Generic inclusion
- `jsonStringify.js` - JSON serialization

#### 3. Array & Collection Functions (12 functions)

- `arrayFrom.js` - Array creation
- `uniq.js` - Array deduplication
- `entries.js` - Object entries
- `keys.js` - Object keys
- `sum.js` - Array summation
- `reduceBuffArray.js` - Buff array reduction
- `attribsToArray.js` - Attributes to array conversion
- `perfFilter.js` - Performance filtering
- `arrayFromRadioNodeList.js` - Radio list to array
- `getArrayByClassName.js` - Class-based array extraction
- `valueText.js` - Value text extraction
- `notLastUpdate.js` - Update filtering

#### 4. Type Checking Functions (8 functions)

- `isArray.js` - Array type check
- `isObject.js` - Object type check
- `isFunction.js` - Function type check
- `isBoolean.js` - Boolean type check
- `isDate.js` - Date type check
- `isString.js` - String type check
- `isNull.js` - Null type check
- `isUndefined.js` - Undefined type check
- `isIterable.js` - Iterable type check

#### 5. Date & Time Functions (3 functions)

- `dateUtc.js` - UTC date creation from parts
- `splitTime.js` - Time conversion to components
- `lastActivityToDays.js` - Activity duration calculation

#### 6. JSON & Data Functions (3 functions)

- `jsonParse.js` - Safe JSON parsing
- `jsonStringify.js` - JSON serialization
- `deepClone.js` - Deep object cloning

#### 7. URL & ID Extraction (Pure Logic Only) (5 functions)

- `getId.js` - ID extraction
- `getPlayerId.js` - Player ID from href
- `itemIdFromImg.js` - Item ID from image
- `playerIdFromAnchor.js` - Player ID from anchor
- `searchPlayerHref.js` - Player href search

## Phase 1 Implementation Plan

### Week 1: Foundation & Core Math/String

**Goal**: Establish Vitest infrastructure and test 15 core functions

**Tasks**:

1. **Install Vitest** (only dependency needed)

   ```bash
   npm install --save-dev vitest @vitest/coverage-v8
   ```

2. **Create Vitest Configuration**

   ```javascript
   // vitest.config.js
   import { defineConfig } from 'vitest/config';

   export default defineConfig({
     test: {
       globals: true,
       environment: 'node', // No DOM needed!
     },
   });
   ```

3. **Update package.json**

   ```json
   {
     "scripts": {
       "test": "npm run test:unit && npm run eslint",
       "test:unit": "vitest run",
       "test:watch": "vitest",
       "test:coverage": "vitest run --coverage"
     }
   }
   ```

4. **First Test Suite** (15 functions):
   - Math: `sum.js`, `round.js`, `bitwiseAnd.js`, `numberIsNaN.js`, `testRange.js`
   - String: `trim.js`, `csvSplit.js`, `replaceDoubleSpace.js`, `toLowerCase.js`
   - Array: `arrayFrom.js`, `uniq.js`, `entries.js`, `keys.js`
   - Type: `isArray.js`, `isObject.js`

**Test Example**:

```javascript
// tests/common/testRange.test.js
import { describe, it, expect } from 'vitest';
import testRange from '../../src/modules/system/testRange.js';

describe('testRange', () => {
  it('returns value when within range', () => {
    expect(testRange('5', 0, 10)).toBe(5);
  });

  it('returns undefined when below min', () => {
    expect(testRange('0', 0, 10)).toBeUndefined();
  });

  it('returns undefined when above max', () => {
    expect(testRange('10', 0, 10)).toBeUndefined();
  });

  it('returns undefined for non-numeric input', () => {
    expect(testRange('abc', 0, 10)).toBeUndefined();
  });

  it('handles string numbers correctly', () => {
    expect(testRange('7', 0, 10)).toBe(7);
  });
});
```

**Success Criteria**:

- `npm run test:unit` executes successfully
- 15 utility functions tested
- Coverage report generated
- Tests run in < 100ms total

### Week 2: Array, Type & Date Functions

**Goal**: Test remaining pure utility functions

**Test Suites** (20 functions):

- **Array Functions**: `reduceBuffArray.js`, `attribsToArray.js`, etc.
- **Type Checking**: All 9 type check functions
- **Date/Time**: `dateUtc.js`, `splitTime.js`, `lastActivityToDays.js`
- **JSON**: `jsonParse.js`, `jsonStringify.js`, `deepClone.js`

**Success Criteria**:

- 35 total utility functions tested
- < 200ms test execution time
- Coverage report shows 100% for tested functions

### Week 3: Regex & ID Extraction Functions

**Goal**: Complete all pure function coverage

**Test Suites** (15+ functions):

- **Regex Functions**: All regex utilities
- **ID Extraction**: Pure ID extraction logic
- **Remaining Utilities**: Any missed pure functions

**Success Criteria**:

- 50+ utility functions fully tested
- Documentation for test patterns
- < 300ms total test execution time

### Week 4: CI/CD Integration

**Goal**: Automate testing in development workflow

**GitHub Actions Workflow**:

```yaml
# .github/workflows/test.yml
name: Test Suite
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run test
      - run: npm run test:coverage
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
```

**Quality Gates**:

- All tests pass before merge
- ESLint passes
- Coverage maintained for tested functions

**Success Criteria**:

- Automated testing on all PRs
- Coverage reporting integrated
- Build passes/fails based on test results

## Phase 1 Directory Structure

```
tests/
├── common/                     # Common utility tests
│   ├── math/
│   │   ├── sum.test.js
│   │   ├── round.test.js
│   │   ├── bitwiseAnd.test.js
│   │   └── testRange.test.js
│   ├── string/
│   │   ├── trim.test.js
│   │   ├── csvSplit.test.js
│   │   ├── replaceDoubleSpace.test.js
│   │   └── regExpFirstCapture.test.js
│   ├── array/
│   │   ├── arrayFrom.test.js
│   │   ├── uniq.test.js
│   │   └── reduceBuffArray.test.js
│   ├── type/
│   │   ├── isArray.test.js
│   │   ├── isObject.test.js
│   │   └── isFunction.test.js
│   ├── date/
│   │   ├── dateUtc.test.js
│   │   ├── splitTime.test.js
│   │   └── lastActivityToDays.test.js
│   └── json/
│       ├── jsonParse.test.js
│       └── deepClone.test.js
└── system/                     # System utility tests
    ├── testRange.test.js
    └── testQuant.test.js
```

## Phase 1 Testing Guidelines

### Test Structure

```javascript
import { describe, it, expect } from 'vitest';
import functionName from '../../src/modules/common/functionName.js';

describe('functionName', () => {
  it('handles normal case', () => {
    expect(functionName(input)).toBe(expected);
  });

  it('handles edge case', () => {
    expect(functionName(edgeInput)).toBe(edgeExpected);
  });

  it('handles error case', () => {
    expect(functionName(invalidInput)).toBeUndefined();
  });
});
```

### Naming Conventions

- Test files: `functionName.test.js` (matches source file)
- Test suites: Function name as describe block
- Test cases: Behavior-focused descriptions

### Coverage Standards

- **Pure Functions**: 100% line coverage
- **Branch Coverage**: All code paths tested
- **Edge Cases**: Boundary conditions covered

### What NOT to Test

- DOM manipulation functions (require browser)
- Functions with jQuery dependencies
- AJAX/fetch operations
- Browser API calls (localStorage, IndexedDB)
- Greasemonkey-specific functions
- Svelte components (require framework)
- Functions that modify global state

## Phase 1 Resource Requirements

### Development Time

- **Week 1**: 8-10 hours (setup + 15 tests)
- **Week 2**: 8-10 hours (20 tests)
- **Week 3**: 8-10 hours (15 tests)
- **Week 4**: 4-6 hours (CI/CD setup)
- **Total**: ~30-35 hours (1 month part-time)

### Dependencies

- **Vitest**: ~5MB
- **Coverage**: ~2MB
- **Total**: ~7MB (minimal footprint)

### Ongoing Maintenance

- **Test Updates**: ~10% additional time when modifying tested functions
- **New Functions**: Write tests for new pure functions as created
- **Zero Infrastructure Maintenance**: No mocks or test harness to maintain

## Phase 1 Success Metrics

### Quantitative

- **Functions Tested**: 50+ pure utility functions
- **Test Coverage**: 100% of tested pure functions
- **Test Performance**: < 500ms total execution
- **Build Time Impact**: < 5s added to CI/CD

### Qualitative

- **Developer Confidence**: Safe refactoring of utility functions
- **Regression Prevention**: Catch utility function bugs before merge
- **Documentation**: Tests serve as usage examples
- **Low Barrier**: Easy for developers to add tests for new utilities

---

# Phase 2: End-to-End Testing Against Real Game

## Overview

Phase 2 focuses on **real-world validation** by testing the userscript against the actual Fallen Sword game. This approach avoids mocking entirely by testing in the environment where the script actually runs.

### Philosophy: Test in Production-Like Environment

Rather than mocking game APIs, DOM structures, and browser behaviors, Phase 2 tests run against:

- Real Fallen Sword pages
- Real game data and APIs
- Real browser with Tampermonkey installed
- Real userscript injected and running

This ensures tests validate actual behavior, not assumptions about how the game works.

## Architecture

### Tool Selection: Playwright

**Why Playwright**:

- **Real Browser Testing**: Chrome/Firefox with actual Tampermonkey extension
- **No Mocking Needed**: Tests interact with real game pages
- **Debugging Tools**: Screenshots, video recording, trace viewer
- **Reliable**: Better selectors and auto-waiting than Selenium
- **Multi-Browser**: Test across Chrome, Firefox, Safari

### Test Strategy

#### 1. Personal Account Testing (Read-Only)

Tests run with the **developer's own Fallen Sword account**. There is no dedicated test account.

**Critical Safety Constraint**: All tests are **read-only** - they verify display, UI elements, and data extraction but **never make irreversible changes** to the account (no spending gold, using items, deleting data, etc.).

#### 2. Userscript Injection

Playwright loads Tampermonkey extension and injects the development build of the userscript.

#### 3. Feature Verification

Tests verify that FSH features work correctly on real game pages:

- UI elements appear
- Data is extracted correctly
- User interactions work (up to confirmation dialogs)
- No JavaScript errors

**Tests stop before final submission** for any action that would modify game state.

#### 4. Visual Regression (Optional)

Screenshot comparisons to catch unintended UI changes.

## Test Categories

### Category 1: Script Loading & Initialization

**What**: Verify userscript loads and initializes on game pages

**Tests**:

- Script loads on main game page
- No console errors during initialization
- FSH version displayed correctly
- Analytics initialized (if applicable)
- Settings accessible

**Example Pages**:

- `https://www.fallensword.com/` (main page)
- `https://www.fallensword.com/?cmd=profile` (profile)
- `https://www.fallensword.com/?cmd=guild` (guild)

### Category 2: Core Feature Functionality

**What**: Verify major features work on real game pages

**Critical Features to Test**:

1. **Guild Features**
   - Guild info page enhancements load
   - Member list displays correctly
   - Guild tracker widgets appear
   - Combat log functions work

2. **Profile Features**
   - Player stats display correctly
   - Equipment manager loads
   - Buff display enhancements work
   - Backpack features functional

3. **World/Combat Features**
   - Map enhancements load
   - Combat stats tracking works
   - Quick buff system functional

4. **Market Features**
   - Auction house enhancements
   - Buff market tools
   - Quick create functions

5. **Utility Features**
   - Settings panel loads and saves
   - Notepad/tracking tools work
   - Quick links functional
   - Keyboard shortcuts respond

### Category 3: Data Extraction & Processing

**What**: Verify data is correctly extracted from game pages

**Tests**:

- Player data extraction from profile
- Guild member data from lists
- Item data from inventory/backpack
- Combat log parsing
- Buff/stats calculation

### Category 4: User Workflows (Read-Only)

**What**: End-to-end user scenarios that **stop before making irreversible changes**

**Safe Workflow Examples**:

1. User opens settings → changes preference → saves → preference persists (safe: settings are reversible)
2. User views guild page → clicks member → member profile loads with enhancements (safe: read-only)
3. User opens quick buff modal → selects buffs → **stops at confirmation** (safe: no actual buff sent)
4. User views world map → clicks location → enhanced location info displays (safe: read-only)
5. User opens auction house → views items with FSH enhancements (safe: no purchases made)

**What NOT to Test** (irreversible actions):

- ❌ Actually sending buffs or items
- ❌ Purchasing items or using gold
- ❌ Deleting guild data or messages
- ❌ Using consumable items
- ❌ Accepting/completing quests that consume resources

### Category 5: Regression Prevention

**What**: Tests for previously fixed bugs

**Approach**:

- Create test for each major bug fix
- Run on every build to prevent regressions
- Focus on user-reported issues

## Implementation Plan

### Setup Phase (Week 1-2)

**Tasks**:

1. **Install Playwright with Tampermonkey Support**

```bash
npm install --save-dev playwright @playwright/test
npx playwright install chromium firefox
```

2. **Configure Playwright for Userscripts**

```javascript
// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  use: {
    baseURL: 'https://www.fallensword.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        launchOptions: {
          args: [
            `--disable-extensions-except=${pathToTampermonkey}`,
            `--load-extension=${pathToTampermonkey}`,
          ],
        },
      },
    },
  ],
});
```

3. **Use Existing Browser Session (Developer's Account)**

**Approach**: Instead of automating login, use the developer's existing authenticated browser session.

```javascript
// playwright.config.js - Use existing browser profile
export default defineConfig({
  testDir: './tests/e2e',
  use: {
    baseURL: 'https://www.fallensword.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    // Use developer's existing Chrome profile (already logged in)
    launchOptions: {
      args: [
        '--user-data-dir=/path/to/chrome/profile', // Developer sets this
      ],
    },
  },
});
```

**Alternative**: Manual login once, save session state:

```javascript
// tests/e2e/setup/save-auth.js
// Developer runs this once to save their session
import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://www.fallensword.com/');
  console.log('Please log in manually...');

  // Wait for manual login
  await page.waitForURL('**/cmd=*', { timeout: 120000 });

  // Save authenticated state
  await page.context().storageState({ path: 'auth.json' });
  console.log('Authentication saved to auth.json');

  await browser.close();
})();
```

Then in tests: `test.use({ storageState: 'auth.json' });`

4. **Userscript Injection Helper**

```javascript
// tests/e2e/helpers/loadUserscript.js
export async function loadFSH(page) {
  // Wait for page load
  await page.waitForLoadState('networkidle');

  // Verify FSH loaded
  const fshLoaded = await page.evaluate(() => {
    return typeof window.calf !== 'undefined';
  });

  if (!fshLoaded) {
    throw new Error('FSH did not load');
  }

  // Wait for FSH initialization
  await page.waitForTimeout(1000);

  return fshLoaded;
}
```

**Success Criteria**:

- Playwright can launch browser with Tampermonkey
- Developer's authenticated session works
- Development userscript loads on game pages
- No console errors on script load

### Basic Feature Tests (Week 3-4)

**Implement Core Test Suite**:

```javascript
// tests/e2e/core/guild.spec.js
import { test, expect } from '@playwright/test';
import { loadFSH } from '../helpers/loadUserscript';

test.describe('Guild Features', () => {
  test.use({ storageState: 'auth.json' });

  test('guild page loads with FSH enhancements', async ({ page }) => {
    await page.goto('/?cmd=guild');
    await loadFSH(page);

    // Verify FSH guild enhancements loaded
    const guildTracker = await page.locator('.fsh-guild-tracker');
    await expect(guildTracker).toBeVisible();

    // No JavaScript errors
    const errors = [];
    page.on('pageerror', (err) => errors.push(err));
    await page.waitForTimeout(2000);
    expect(errors).toHaveLength(0);
  });

  test('guild member list displays correctly', async ({ page }) => {
    await page.goto('/?cmd=guild&subcmd=members');
    await loadFSH(page);

    // Check for FSH member enhancements
    const memberRows = await page.locator('.fsh-member-row');
    expect(await memberRows.count()).toBeGreaterThan(0);
  });
});
```

```javascript
// tests/e2e/core/settings.spec.js
import { test, expect } from '@playwright/test';
import { loadFSH } from '../helpers/loadUserscript';

test.describe('Settings', () => {
  test.use({ storageState: 'auth.json' });

  test('settings panel opens and saves', async ({ page }) => {
    await page.goto('/');
    await loadFSH(page);

    // Open settings
    await page.click('.fsh-settings-link');

    // Wait for settings modal
    const settingsModal = await page.locator('.fsh-settings-modal');
    await expect(settingsModal).toBeVisible();

    // Toggle a setting
    await page.click('#fsh-setting-some-option');

    // Save
    await page.click('.fsh-settings-save');

    // Verify saved
    await page.waitForTimeout(500);

    // Reload and check persistence
    await page.reload();
    await loadFSH(page);

    await page.click('.fsh-settings-link');
    const checkbox = await page.locator('#fsh-setting-some-option');
    await expect(checkbox).toBeChecked();
  });
});
```

**Success Criteria**:

- 10-15 core feature tests written
- Tests pass on development build
- Clear failure messages when tests fail
- Tests run in < 2 minutes total

### Workflow Tests (Week 5-6)

**User Journey Tests**:

```javascript
// tests/e2e/workflows/buff-workflow.spec.js
test('quick buff modal opens and allows buff selection', async ({ page }) => {
  await page.goto('/?cmd=guild&subcmd=members');
  await loadFSH(page);

  // Click quick buff on first member
  await page.click('.fsh-quick-buff-btn:first-child');

  // Quick buff modal opens
  const buffModal = await page.locator('.fsh-buff-modal');
  await expect(buffModal).toBeVisible();

  // Select buffs
  await page.click('[data-buff-id="1"]');
  await page.click('[data-buff-id="3"]');

  // Verify buffs are selected
  const selectedBuffs = await page.locator('[data-buff-id].selected');
  expect(await selectedBuffs.count()).toBe(2);

  // Verify confirm button is enabled
  const confirmBtn = await page.locator('.fsh-buff-confirm');
  await expect(confirmBtn).toBeEnabled();

  // STOP HERE - Don't actually confirm
  // Close modal instead
  await page.click('.fsh-buff-cancel');
  await expect(buffModal).not.toBeVisible();
});
```

**Note**: Test verifies UI flow but **never clicks the final confirm button** to avoid actually sending buffs.

**Success Criteria**:

- 5-10 end-to-end workflow tests
- Tests cover critical user paths
- **Tests never make irreversible changes** (stop before final confirmation)

### Regression Suite (Week 7-8)

**Bug Regression Tests**:

```javascript
// tests/e2e/regression/issue-123.spec.js
test('Issue #123: Guild stamina displays correctly', async ({ page }) => {
  // Test for previously fixed bug
  await page.goto('/?cmd=guild&subcmd=view');
  await loadFSH(page);

  const stamDisplay = await page.locator('.fsh-guild-stam');
  const text = await stamDisplay.textContent();

  // Previously showed NaN, should now show number
  expect(text).not.toContain('NaN');
  expect(text).toMatch(/\d+/);
});
```

**Approach**:

- Create test for each critical bug fix from GitHub issues
- Run on every PR to prevent regressions
- Tag tests with issue numbers

**Success Criteria**:

- 10+ regression tests
- Tests prevent known bugs from returning

### CI/CD Integration (Week 9-10)

**Note**: E2E tests require an authenticated session with a personal account, so **they cannot run in CI/CD**. E2E tests are **developer-run only** on local machines.

**Local-Only Testing**:

**Package.json Updates**:

```json
{
  "scripts": {
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:e2e:debug": "playwright test --debug"
  }
}
```

**Success Criteria**:

- E2E tests run locally with `npm run test:e2e`
- Developer can run tests before releases
- Screenshots/videos available for debugging failures
- Tests documented for easy developer execution

## Phase 2 Directory Structure

```
tests/
├── e2e/                        # End-to-end tests
│   ├── setup/
│   │   └── save-auth.js        # One-time: Save developer's session
│   ├── helpers/
│   │   ├── loadUserscript.js   # FSH loading helper
│   │   └── selectors.js        # Common selectors
│   ├── core/                   # Core feature tests (read-only)
│   │   ├── guild.spec.js
│   │   ├── profile.spec.js
│   │   ├── settings.spec.js
│   │   ├── world.spec.js
│   │   └── market.spec.js
│   ├── workflows/              # User journey tests (read-only)
│   │   ├── buff-workflow.spec.js
│   │   ├── settings-workflow.spec.js
│   │   └── guild-tracker.spec.js
│   └── regression/             # Bug regression tests (read-only)
│       ├── issue-123.spec.js
│       ├── issue-456.spec.js
│       └── issue-789.spec.js
├── auth.json                   # Saved authentication state (gitignored)
└── playwright.config.js        # Playwright configuration
```

## Testing Guidelines

### Test Structure

```javascript
import { test, expect } from '@playwright/test';
import { loadFSH } from '../helpers/loadUserscript';

test.describe('Feature Name', () => {
  test.use({ storageState: 'auth.json' });

  test('specific behavior', async ({ page }) => {
    // Navigate to page
    await page.goto('/page-url');

    // Wait for FSH
    await loadFSH(page);

    // Test behavior
    const element = await page.locator('.fsh-element');
    await expect(element).toBeVisible();
  });
});
```

### Best Practices

1. **Use Real Game Pages**: Always test against actual Fallen Sword URLs
2. **Wait for FSH**: Use `loadFSH()` helper to ensure script loaded
3. **NEVER Make Irreversible Changes**: Stop before final confirmations that spend resources or modify data
4. **Screenshot on Failure**: Playwright does this automatically
5. **Descriptive Test Names**: Test names should explain what's being verified
6. **Use Selectors Wisely**: Prefer data attributes or unique classes for FSH elements
7. **Developer's Personal Account**: Tests run against the developer's own account - be careful!

### What to Test

✅ **DO Test**:

- FSH UI elements appear
- FSH features function correctly
- No JavaScript errors
- Data displays accurately
- Settings persist
- User interactions work

❌ **DON'T Test** (Irreversible Actions):

- **Spending Resources**: Gold, stamina, tokens, etc.
- **Using Items**: Consumables, potions, equipment durability
- **Sending Items/Buffs**: Actually completing transfers
- **Deleting Data**: Messages, guild data, characters
- **Accepting/Completing Quests**: That consume resources or progress
- **Making Purchases**: Auction house, buff market, shops
- **Combat Actions**: That use stamina or resources
- **Game Functionality**: Server-side behavior (not our code)

## Phase 2 Resource Requirements

### Development Time

- **Setup**: 10-15 hours (Playwright config, auth, helpers)
- **Core Tests**: 15-20 hours (15-20 tests)
- **Workflow Tests**: 10-15 hours (5-10 tests)
- **Regression Suite**: 10-15 hours (10+ tests)
- **CI/CD Integration**: 5-10 hours
- **Total**: ~50-75 hours (2-3 months part-time)

### Dependencies

- **Playwright**: ~100MB (browser binaries)
- **Developer's Account**: Uses developer's personal Fallen Sword account
- **Local Execution Only**: Cannot run in CI/CD

### Ongoing Maintenance

- **Test Updates**: Update when game UI changes (infrequent)
- **New Features**: Add tests for new FSH features
- **Regression Tests**: Add test for each bug fix

## Phase 2 Success Metrics

### Quantitative

- **Test Coverage**: 15-30 E2E tests covering critical features
- **Test Performance**: < 5 minutes total execution
- **Reliability**: < 5% flaky test rate
- **Bug Detection**: Catch regressions before release

### Qualitative

- **Real-World Validation**: Confidence script works on actual game
- **Visual Verification**: Screenshots show correct rendering
- **User Journey Coverage**: Critical paths tested
- **Regression Prevention**: Known bugs stay fixed

## Phase 1 + Phase 2: Complete Testing Strategy

### Combined Benefits

**Phase 1 (Unit Tests)**:

- Fast feedback (< 1 second)
- Runs on every commit
- Catches logic bugs early
- 50+ utility functions covered

**Phase 2 (E2E Tests)**:

- Real-world validation
- Runs locally before releases (developer-triggered)
- Catches integration issues
- Critical features verified
- Read-only tests (no irreversible changes)

**Together**: Comprehensive confidence without complex mocking infrastructure

## Conclusion

Phase 2 completes the testing strategy by validating the userscript in its actual runtime environment - the Fallen Sword game. By testing against real pages with real data, we avoid the complexity and maintenance burden of mocking game APIs and DOM structures.

The two-phase approach provides:

- **Fast Unit Tests**: Immediate feedback on pure logic (Phase 1)
- **Real-World Validation**: Confidence in actual game environment (Phase 2)
- **No Mocking**: Simple, maintainable tests
- **Full Coverage**: Logic and integration both tested

This pragmatic strategy delivers comprehensive testing without hindering development velocity.
