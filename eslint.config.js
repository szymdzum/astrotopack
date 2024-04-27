import globals from "globals";
// import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
//import eslintPluginAstro from "eslint-plugin-astro";

// https://github.com/withastro/astro/blob/237e17c8feea244b06b00ceaed08cb16d3d6baeb/eslint.config.js

// https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#eslintconfigjs-flat-config-plugin-caveat


export default [
  // js.configs.recommended,
 // ...eslintPluginAstro.configs['flat/recommended'],
  {
  languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node
        }
    },
    rules: {
      semi: "error",
      "no-console": "warn",
      "prefer-const": "error",
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
   eslintConfigPrettier,
];
// Thats the eslint.config.js (flat config) 