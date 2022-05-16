module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-duplicates': 0,
    'import/no-unresolved': 0,
    'max-len': 0,
  },
};
