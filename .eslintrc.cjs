module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "eslint-config-prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "prettier", "eslint-plugin-prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": [
      "error",
      { ignores: ["error", "destinations"] },
    ],
    "no-multi-spaces": ["error"],
    "new-cap": "error",
    "no-invalid-this": "error",
    "prefer-const": "error",
    "no-new-func": "error",
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "func-names": "warn",
    "no-process-exit": "warn",
    "object-shorthand": "warn",
    "class-methods-use-this": "error",
    "no-param-reassign": "error",
    "no-var": "error",
    "prefer-arrow-callback": "warn",
    "prefer-rest-params": "warn",
    "arrow-parens": ["error", "always"],
    "arrow-body-style": ["error", "as-needed"],
    "no-eval": "error",
    "no-implied-eval": "error",
    eqeqeq: "error",
    "no-with": "error",
    "no-plusplus": "error",
    "jsx-a11y/label-has-for": 0,
  },
};
