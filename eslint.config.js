import js from '@eslint/js';
import globals from 'globals';
import dicoding from 'eslint-config-dicodingacademy';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      ...dicoding.rules,
    },
  },
]);