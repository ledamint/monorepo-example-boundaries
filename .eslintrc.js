module.exports = {
  env: {
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {typescript: {alwaysTryTypes: true}},
    'boundaries/elements': [
      {
        type: 'app',
        pattern: 'app/**/*',
        mode: 'folder',
      },
      {
        type: 'processes',
        pattern: 'processes/**/*',
        mode: 'folder',
      },
      {
        type: 'pages',
        pattern: 'pages/**/*',
        mode: 'folder',
      },
      {
        type: 'widgets',
        pattern: 'widgets/**/*',
        mode: 'folder',
      },
      {
        type: 'features',
        pattern: 'features/**/*',
        mode: 'folder',
      },
      {
        type: 'entities',
        pattern: 'entities/**/*',
        mode: 'folder',
      },
      {
        type: 'libs',
        pattern: 'libs/**/*',
        mode: 'folder',
      },
      {
        type: 'shared',
        pattern: 'shared/**/*',
        mode: 'folder',
      },
    ],
    'boundaries/ignore': ['**/*.test.*'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'boundaries',
  ],
  rules: {
    'boundaries/element-types': [
      'error',
      {
        default: 'disallow',
        rules: [
          {
            from: 'app',
            allow: [
              'processes',
              'pages',
              'widgets',
              'features',
              'entities',
              'libs',
              'shared',
            ],
          },
          {
            from: 'processes',
            allow: [
              'pages',
              'widgets',
              'features',
              'entities',
              'libs',
              'shared',
            ],
          },
          {
            from: 'pages',
            allow: ['widgets', 'features', 'entities', 'libs', 'shared'],
          },
          {from: 'widgets', allow: ['features', 'entities', 'libs', 'shared']},
          {from: 'features', allow: ['entities', 'libs', 'shared']},
          {from: 'entities', allow: ['libs', 'shared']},
          {from: 'libs', allow: ['libs', 'shared']},
          {from: 'shared', allow: ['shared', 'libs']},
        ],
      },
    ],
  },
  ignorePatterns: [
    '*.g.ts',
    '*.d.ts',
    '*.config.js',
    '**/dist/**/*.js',
    '**/build/**/*.js',
    '**/node_modules/*',
  ],
};