import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["lib", '**/eslint.config.mjs'],
}, ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        ecmaVersion: 5,
        sourceType: "commonjs",

        parserOptions: {
            parser: "/Users/leteu/Dev/jwt-decoder/node_modules/.pnpm/@typescript-eslint+parser@8.19.0_eslint@9.17.0_typescript@5.7.2/node_modules/@typescript-eslint/parser/dist/index.js",
            extraFileExtensions: [".ts"],
        },
    },

    rules: {
        "prefer-promise-reject-errors": "off",

        quotes: ["warn", "single", {
            avoidEscape: true,
        }],

        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-var-requires": "off",
        "no-unused-vars": "off",
        "no-debugger": "off",
    },
}];
