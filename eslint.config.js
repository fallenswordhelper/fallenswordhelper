import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.greasemonkey,
        ...globals.jquery,
        ...globals.node,
        DataTable: 'readonly',
        defineCalfPath: 'readonly',
        defineCalfVer: 'readonly',
        defineDataTablesPath: 'readonly',
        defineEnvironment: 'readonly',
        defineUserIsDev: 'readonly',
        defineVersion: 'readonly',
        GameController: 'readonly',
        GameData: 'readonly',
        gtag: 'readonly',
      },
    },
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  ...eslintPluginSvelte.configs['flat/recommended'],
  ...eslintPluginSvelte.configs['flat/prettier'],
  {
    files: ['**/*.svelte.js', '*.svelte.js'],
    languageOptions: {
      parser: svelteParser,
    },
  },
  { ignores: ['dist/'] },
  {
    rules: {
      'no-unused-vars': ['error', { caughtErrors: 'none' }],
      'svelte/valid-compile': ['error', { ignoreWarnings: true }],
    },
  },
];
