module.exports = {
  env: {
    browser: true,
    es6: true,
    // node: true,
  },
  extends: [
    // 'plugin:vue/recommended',
    'airbnb-base',
    'plugin:vue/vue3-essential',
    // '@vue/airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    // parser: '@babel/eslint-parser',
  },
  plugins: [
    'vue',
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 0,
    'max-len': 'off',
    'vue/max-len': [
      'error',
      {
        code: 220,
        template: 9000,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreStrings: true,
      },
    ],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
