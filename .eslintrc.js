module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:vue/vue3-essential'],
  parser: 'vue-eslint-parser',
  plugins: ['vue', 'prettier', 'html'],
  rules: {
    'vue/no-unused-vars': 'warn',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'prettier/prettier': 'error',
    'func-call-spacing': 'off',
    'vue/multi-word-component-names': [
      'off',
      {
        ignores: [],
      },
    ],
  },
};
