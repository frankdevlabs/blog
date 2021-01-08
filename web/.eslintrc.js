module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
    'standard-react',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: ['@emotion'],
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'never'],
    '@emotion/pkg-renaming': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
