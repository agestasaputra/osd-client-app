import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'
import globals from 'globals'
// import eslintConfigPrettier from "eslint-config-prettier";

const GLOBALS_BROWSER_FIX = Object.assign({}, globals.browser, {
  AudioWorkletGlobalScope: globals.browser['AudioWorkletGlobalScope '],
})
delete GLOBALS_BROWSER_FIX['AudioWorkletGlobalScope ']

export default tseslint.config(
  eslint.configs.recommended,
  // eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylistic,
  ...tseslint.configs.stylisticTypeChecked,
  ...tseslint.configs.strict,
  ...tseslint.configs.strictTypeChecked,
  {
    // config with just ignores is the replacement for `.eslintignore`
    ignores: [
      '**/*.js',
      '.nuxt',
      '.vscode',
      'dist',
      'coverage',
      'node_modules',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...GLOBALS_BROWSER_FIX,
      },
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        tsconfigRootDir: import.meta.dirname,
        project: 'tsconfig.json',
        extraFileExtensions: ['.vue'],
      },
    },
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
  },
)
