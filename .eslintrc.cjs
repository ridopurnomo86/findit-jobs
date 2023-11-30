module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'vue/no-unused-vars': 'error',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
  },
};
