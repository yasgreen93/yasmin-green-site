module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea', 'ELink', 'n-link', 'p', 'li'],
      allowEmptyLines: false
    }],
    curly: 'off',
    'space-before-function-paren': 'off'
  }
}
