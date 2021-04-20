module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'svelte3',
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 'off',
        'no-label-var': 'off',
      },
    },
  ],
  extends: [
    'airbnb-base',
  ],
  globals: {
    Blob: 'readonly',
    clearTimeout: 'readonly',
    console: 'readonly',
    document: 'readonly',
    DOMParser: 'readonly',
    Element: 'readonly',
    EventTarget: 'readonly',
    getComputedStyle: 'readonly',
    HTMLDocument: 'readonly',
    HTMLTableElement: 'readonly',
    Image: 'readonly',
    localStorage: 'readonly',
    navigator: 'readonly',
    Node: 'readonly',
    performance: 'readonly',
    Promise: 'readonly',
    requestAnimationFrame: 'readonly',
    setTimeout: 'readonly',
    URL: 'readonly',
    window: 'readonly',
    XPathResult: 'readonly',
    require: 'readonly',
    $: 'readonly',
    jQuery: 'readonly',
    GM_info: 'readonly',
    ga: 'readonly',
    GameController: 'readonly',
    GameData: 'readonly',
    Modernizr: 'readonly',
    RadioNodeList: 'readonly',
  },
  rules: {
    'consistent-return': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { packageDir: './' },
    ],
    'import/no-mutable-exports': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_allies',
          '_enemies',
          '_enhancements',
          '_saveState',
          '_showPage',
          '_skills',
        ],
      },
    ],
    'sort-imports': [
      'error',
      {
        memberSyntaxSortOrder: [
          'none',
          'single',
          'multiple',
          'all',
        ],
      },
    ],
  },
};
