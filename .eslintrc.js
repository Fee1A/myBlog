module.exports = {
  root: true,
  env: {
    "es6": true,
    "node": true
  },
  extends: [
    '@vue/standard',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'alloy',
    'alloy/typescript',
    // 'prettier',
    // 'plugin:prettier/recommended',
  ],
  // plugins: ["prettier"],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'quotes': ['error', 'single'],
    'vue/html-quotes': ['error', 'single'],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'never'
      },
    }],
    'vue/component-definition-name-casing': ['off'],
    // 'prettier/prettier': 'error',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
}