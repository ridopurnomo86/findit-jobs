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
  parser: 'vue-eslint-parser',
  extends: ['eslint:recommended', 'prettier', 'plugin:vue/vue3-essential'],
  plugins: ['vue', 'prettier', 'html'],
  rules: {
    'vue/no-unused-vars': 'error',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': [
      'off',
      {
        ignores: [],
      },
    ],
  },
};
