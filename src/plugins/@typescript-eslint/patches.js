module.exports = {
  all: {
    import: {
      "import/first": "off",
      "import/newline-after-import": "off",
      "import/no-unresolved": "off",
      "import/named": "off",
      "import/default": "off",
      "import/namespace": "off",
      "import/no-cycle": "off",
      "import/no-named-as-default": "off",
      "import/no-named-as-default-member": "off",
      "import/no-deprecated": "off",
      "import/no-unused-modules": "off",
    },
    eslint: {
      /**
       * Since we need to add types to arguments, we should always use parens in
       * arrow functions with typescript.
       */
      "arrow-parens": ["error", "always"],

      /**
       * Patches according to @typescript-eslint:all
       * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/all.json
       */
      "brace-style": "off",
      "comma-spacing": "off",
      "default-param-last": "off",
      "func-call-spacing": "off",
      indent: "off",
      "no-array-constructor": "off",
      "no-dupe-class-members": "off",
      "no-empty-function": "off",
      "no-extra-parens": "off",
      "no-extra-semi": "off",
      "no-magic-numbers": "off",
      "no-unused-expressions": "off",
      "no-unused-vars": "off",
      "no-use-before-define": "off",
      "no-useless-constructor": "off",
      quotes: "off",
      "require-await": "off",
      "no-return-await": "off",
      semi: "off",
      "space-before-function-paren": "off",

      /**
       * Patches according to plugin:recommended
       * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
       */
      camelcase: "off",
      /*
       * "no-array-constructor": "off",
       * "no-empty-function": "off",
       * "no-unused-vars": "off",
       * "no-use-before-define": "off",
       */
      "no-var": "error",
      "prefer-const": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",

      /**
       * Patches according to plugin:requiring-type-checking
       * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.json
       */
      /*
       * "no-var": "error",
       * "prefer-const": "error",
       * "prefer-rest-params": "error",
       * "prefer-spread": "error",
       */

      /**
       * Patches according to plugin:eslint (for .ts, .tsx)
       * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/eslint-recommended.ts
       */
      "getter-return": "off",
      "no-dupe-args": "off",
      "no-dupe-keys": "off",
      "no-unreachable": "off",
      "valid-typeof": "off",
      "no-const-assign": "off",
      "no-new-symbol": "off",
      "no-this-before-super": "off",
      // This is checked by Typescript using option 'strictNullChecks'
      "no-undef": "off",
      "no-redeclare": "off",
    },
  },
}
