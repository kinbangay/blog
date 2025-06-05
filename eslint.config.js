import js from '@eslint/js'
import { default as eslintPluginPrettier, default as prettier } from 'eslint-plugin-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tailwindcss from 'tailwindcss'
import tseslint from 'typescript-eslint'
export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'prettier': prettier,
            'tailwindcss': tailwindcss,
            'eslint-plugin-prettier': eslintPluginPrettier,
            'typescript-eslint': tseslint,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        },
    }
)
