module.exports = {
  root: true,
  extends: [
    'react-app',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/jsx-key': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-sort-props': [
      2,
      {
        shorthandFirst: true,
        callbacksLast: true,
        ignoreCase: true
      }
    ],
    'react/self-closing-comp': [
      2,
      {
        component: true,
        html: true
      }
    ],
    'react/no-unknown-property': 2,
    '@typescript-eslint/array-type': 2,
    '@typescript-eslint/camelcase': 2,
    '@typescript-eslint/class-name-casing': 2,
    '@typescript-eslint/interface-name-prefix': [2, 'always'],
    '@typescript-eslint/no-empty-interface': 2,
    '@typescript-eslint/explicit-member-accessibility': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      modules: true,
      jsx: true
    }
  }
}
