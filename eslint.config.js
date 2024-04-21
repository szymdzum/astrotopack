import globals from "globals";

export default [
  {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    rules: {
      semi: "error",
      "no-console": "warn",
      "prefer-const": "error",
    },
  },
];
