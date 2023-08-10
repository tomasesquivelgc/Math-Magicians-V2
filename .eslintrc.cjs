module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb', // Add other rules from the airbnb configuration if needed
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2', // Update this to the correct version
    },
  },
  plugins: ['react', 'react-refresh'],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'no-shadow': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // Add other rules from the linters configuration
    // You can selectively merge rules from both configurations here
  },
  overrides: [
    {
      // Feel free to replace with your preferred file pattern - eg. 'src/**/*Slice.js' or 'redux/**/*Slice.js'
      files: ['src/**/*Slice.js'],
      // Avoid state param assignment
      rules: { 'no-param-reassign': ['error', { props: false }] },
    },
  ],
  ignorePatterns: ['dist/', 'build/', '.eslintrc.cjs'], // Add other ignore patterns if needed
};
