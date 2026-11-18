import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules/**', 'dist/**', 'playwright-report/**', 'test-results/**', '.venv/**'],
  },
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    rules: { ...js.configs.recommended.rules, eqeqeq: ['error', 'always'] },
  },
  { files: ['site/**/*.js'], languageOptions: { globals: globals.browser } },
  {
    files: ['scripts/**/*.mjs', 'tests/**/*.js', 'playwright.config.js', 'eslint.config.js'],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['tests/browser/**/*.js'],
    // These names run inside page.evaluate callbacks, not the Node test runner.
    languageOptions: {
      globals: {
        document: 'readonly',
        innerWidth: 'readonly',
        window: 'readonly',
        Event: 'readonly',
        PageTransitionEvent: 'readonly',
      },
    },
  },
  prettier,
];
