// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  plugins: ['prettier-plugin-svelte', '@shopify/prettier-plugin-liquid'],
  overrides: [
    { files: '*.svelte', options: { parser: 'svelte' } },
    { files: '*.liquid', options: { printWidth: 80, singleQuote: false } },
  ],
};

export default config;
