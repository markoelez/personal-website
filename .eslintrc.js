/* istanbul ignore file */

module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'react-hooks', 'prettier'],
  ignorePatterns: ['node_modules/', 'public/'],
  rules: {
    'prettier/prettier': 'error',
    'react/display-name': 'off',
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
}
