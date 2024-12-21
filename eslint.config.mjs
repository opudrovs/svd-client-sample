import { dirname } from "path";
import { fileURLToPath } from "url";

import configPrettier from 'eslint-config-prettier';
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  configPrettier,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    ignores: [
      'node_modules/**',
      '.next/**',
      'public/**',
      'dist/**',
      'src/data',
      'src/redux/storage.js',
      '**/*.test.js',
      '**/*.test.jsx',
    ],
    plugins: {
      pluginReact,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier:pluginPrettier,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/no-unescaped-entities': 'off',
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      ...pluginPrettier.configs.recommended.rules
    },
  },
];

export default eslintConfig;
