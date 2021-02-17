module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'prettier', 'prettier/react', 'prettier/@typescript-eslint'],
  plugins: ['jest', 'react', 'react-hooks', '@typescript-eslint', 'import', 'import-helpers', 'prettier'],
  globals: {
    jest: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    useJSXTextNode: true,
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-console': ['error', { allow: ['tron'] }],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    camelcase: ['error', { properties: 'always' }],
    'no-use-before-define': 'off',
    'no-case-declarations': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
    'max-len': ['error', { code: 120 }],
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'prettier/prettier': 'error',
    'import/no-unresolved': 'error',
    'import/extensions': [0, 'never', { extensions: ['.jsx', '.js'] }],
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'never',
        groups: [
          '/^react/',
          '/^next/',
          '/^styled-components/',
          '/^@/',
          'module',
          '/^~/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        directory: './tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        '@typescript-eslint/no-use-before-define': ['error'],
      },
    },
  ],
}
