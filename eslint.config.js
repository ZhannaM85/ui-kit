// @ts-check
const eslint = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = defineConfig([
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      // Require one empty line between class members
      "lines-between-class-members": ["error", "always"],
      // No more than one empty line anywhere (and none at EOF)
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      // No trailing/hanging spaces
      "no-trailing-spaces": "error",
      // Require explicit public/private/protected on class members
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          accessibility: "explicit",
          overrides: {
            constructors: "no-public",
          },
        },
      ],
      // Consistent member ordering: fields → constructor → methods
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: [
            "signature",
            "field",
            "constructor",
            "get",
            "set",
            "method",
          ],
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
    ],
    rules: {},
  },
  // Library components: prefix "kit", may use standalone: false
  {
    files: ["src/**/*.ts"],
    rules: {
      "@angular-eslint/prefer-standalone": "off",
      "@angular-eslint/component-selector": [
        "error",
        { type: "element", prefix: "kit", style: "kebab-case" },
      ],
      "@angular-eslint/directive-selector": [
        "error",
        { type: "attribute", prefix: "kit", style: "camelCase" },
      ],
    },
  },
]);
