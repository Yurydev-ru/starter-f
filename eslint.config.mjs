import vuePlugin from 'eslint-plugin-vue';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importsPlugin from 'eslint-plugin-import';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import commentsPlugin from 'eslint-plugin-eslint-comments';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import promisePlugin from 'eslint-plugin-promise';
import markdownPlugin from 'eslint-plugin-markdown';
import stylisticPlugin from '@stylistic/eslint-plugin';
import cssPlugin from '@eslint/css';
import htmlPlugin from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';
import vueParser from 'vue-eslint-parser';


export default [
  // Global ignores
  {
    ignores: [
      'node_modules/',
      'dist/',
      '.output/',
      '.nuxt/',
      '.nitro/',
      '.cache/',
      '.data/',
      'logs/',
      '**/*.log'
    ],
  },
  // Основной конфиг для JS/TS/Vue
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        project: './tsconfig.json'
      }
    },
    plugins: {
      'vue': vuePlugin,
      '@typescript-eslint': tsPlugin,
      'import': importsPlugin,
      'css': cssPlugin,
      'html': htmlPlugin,
      'markdown': markdownPlugin,
      'unused-imports': unusedImportsPlugin,
      'eslint-comments': commentsPlugin,
      'jsdoc': jsdocPlugin,
      'promise': promisePlugin,
      'stylistic': stylisticPlugin
    },
    rules: {
      // Стилистические правила
      'stylistic/indent': ['error', 2],
      'stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      'stylistic/semi': ['error', 'always'],
      'stylistic/comma-dangle': ['error', 'only-multiline'],
      'stylistic/object-curly-spacing': ['error', 'always'],
      'stylistic/array-bracket-spacing': ['error', 'never'],
      'stylistic/max-len': ['warn', { 
        code: 120, 
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true
      }],

      // TypeScript
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-floating-promises': 'error',

      // Vue
      'vue/html-indent': ['error', 2],
      'vue/max-attributes-per-line': ['error', {
        singleline: 3,
        multiline: { 
          max: 1 
        },
      }],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/no-v-html': 'warn',
      'vue/multi-word-component-names': 'off',

      // Импорты
      'import/order': ['error', {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
        alphabetize: { 
          order: 'asc', 
          caseInsensitive: true 
        }
      }],
      'import/no-duplicates': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['error', {
       vars: 'all', 
       varsIgnorePattern: '^_', 
       args: 'after-used', 
       argsIgnorePattern: '^_' 
      }],

      // Комментарии ESLint
      'eslint-comments/no-unused-disable': 'warn',
      'eslint-comments/no-duplicate-disable': 'error',

      // JSDoc
      'jsdoc/check-alignment': 'error',
      'jsdoc/require-jsdoc': ['warn', {
        contexts: [
          'FunctionDeclaration',
          'MethodDefinition',
          'ClassDeclaration'
        ]
      }],

      // Промисы
      'promise/always-return': 'error',
      'promise/no-return-wrap': 'error',
      'promise/param-names': 'error'
    }
  },

  // Конфиг для Markdown
  {
    files: ['**/*.md'],
    plugins: {
      markdown: markdownPlugin
    },
    processor: 'markdown/markdown'
  },
  {
    files: ['**/*.md/*.{js,ts,vue}'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'off'
    }
  },

  // Конфиг для HTML
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: htmlParser
    },
    plugins: {
      html: htmlPlugin
    },
    rules: {
      'html/indent': ['error', 2],
      'html/quotes': ['error', 'single'],
      'html/require-closing-tags': 'error'
    }
  },

  // Конфиг для CSS/SCSS
  {
    files: ['**/*.{css,scss}'],
    language: 'css/css',
    languageOptions: {
            tolerant: true,
        },
        rules: {
            "css/no-empty-blocks": "error",
        },
    plugins: {
      css: cssPlugin
    },
    },
];