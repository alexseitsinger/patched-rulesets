module.exports = {
  all: {
    flowtype: {
      /**
       * Patches according to eslint-config-prettier/flowtype
       * https://github.com/prettier/eslint-config-prettier/blob/master/flowtype.js
       */
      "flowtype/boolean-style": "off",
      "flowtype/delimiter-style": "off",
      "flowtype/generic-spacing": "off",
      "flowtype/object-type-delimiter": "off",
      "flowtype/semi": "off",
      "flowtype/space-after-type-colon": "off",
      "flowtype/space-before-generic-bracket": "off",
      "flowtype/space-before-type-colon": "off",
      "flowtype/union-intersection-spacing": "off",
    },
    "@typescript-eslint": {
      /**
       * Patches according to eslint-config-prettier/@typescript-eslint
       * https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js
       */
      "@typescript-eslint/quotes": 0,
      "@typescript-eslint/brace-style": "off",
      "@typescript-eslint/comma-spacing": "off",
      "@typescript-eslint/func-call-spacing": "off",
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/member-delimiter-style": "off",
      "@typescript-eslint/no-extra-parens": "off",
      "@typescript-eslint/no-extra-semi": "off",
      "@typescript-eslint/semi": "off",
      "@typescript-eslint/space-before-function-paren": "off",
      "@typescript-eslint/type-annotation-spacing": "off",
    },
    babel: {
      /**
       * Patches according to eslint-config-prettier/babel
       * https://github.com/prettier/eslint-config-prettier/blob/master/babel.js
       */
      "babel/quotes": 0,
      "babel/object-curly-spacing": "off",
      "babel/semi": "off",
    },
    react: {
      /**
       * Patches according to eslint-config-prettier/react
       * https://github.com/prettier/eslint-config-prettier/blob/master/react.js
       */
      "react/jsx-child-element-spacing": "off",
      "react/jsx-closing-bracket-location": "off",
      "react/jsx-closing-tag-location": "off",
      "react/jsx-curly-newline": "off",
      "react/jsx-curly-spacing": "off",
      "react/jsx-equals-spacing": "off",
      "react/jsx-first-prop-new-line": "off",
      "react/jsx-indent": "off",
      "react/jsx-indent-prop": "off",
      "react/jsx-max-props-per-line": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-props-no-multi-spaces": "off",
      "react/jsx-tag-spacing": "off",
      "react/jsx-wrap-multilines": "off",
    },
    standard: {
      /**
       * Patches according to eslint-config-prettier/standard
       * https://github.com/prettier/eslint-config-prettier/blob/master/standard.js
       */
      "standard/array-bracket-even-spacing": "off",
      "standard/computed-property-even-spacing": "off",
      "standard/object-curly-even-spacing": "off",
    },
    unicorn: {
      /**
       * Patches according to eslint-config-prettier/unicorn.
       * https://github.com/prettier/eslint-config-prettier/blob/master/unicorn.js
       */
      "unicorn/no-nested-ternary": "off",
      "unicorn/number-literal-case": "off",
    },
    eslint: {
      /**
       * Patches according to eslint-config-prettier
       *
       * The following rules can be used in some cases. See the README for more
       * information. (These are marked with `0` instead of `"off"` so that a
       * script can distinguish them.)
       */
      "arrow-body-style": 0,
      curly: 0,
      "lines-around-comment": 0,
      "max-len": 0,
      "no-confusing-arrow": 0,
      "no-mixed-operators": 0,
      "no-tabs": 0,
      "no-unexpected-multiline": 0,
      "prefer-arrow-callback": 0,
      quotes: 0,
      // The rest are rules that you never need to enable when using Prettier.
      "array-bracket-newline": "off",
      "array-bracket-spacing": "off",
      "array-element-newline": "off",
      "arrow-parens": "off",
      "arrow-spacing": "off",
      "block-spacing": "off",
      "brace-style": "off",
      "comma-dangle": "off",
      "comma-spacing": "off",
      "comma-style": "off",
      "computed-property-spacing": "off",
      "dot-location": "off",
      "eol-last": "off",
      "func-call-spacing": "off",
      "function-call-argument-newline": "off",
      "function-paren-newline": "off",
      "generator-star": "off",
      "generator-star-spacing": "off",
      "implicit-arrow-linebreak": "off",
      indent: "off",
      "jsx-quotes": "off",
      "key-spacing": "off",
      "keyword-spacing": "off",
      "linebreak-style": "off",
      "multiline-ternary": "off",
      "newline-per-chained-call": "off",
      "new-parens": "off",
      "no-arrow-condition": "off",
      "no-comma-dangle": "off",
      "no-extra-parens": "off",
      "no-extra-semi": "off",
      "no-floating-decimal": "off",
      "no-mixed-spaces-and-tabs": "off",
      "no-multi-spaces": "off",
      "no-multiple-empty-lines": "off",
      "no-reserved-keys": "off",
      "no-space-before-semi": "off",
      "no-trailing-spaces": "off",
      "no-whitespace-before-property": "off",
      "no-wrap-func": "off",
      "nonblock-statement-body-position": "off",
      "object-curly-newline": "off",
      "object-curly-spacing": "off",
      "object-property-newline": "off",
      "one-var-declaration-per-line": "off",
      "operator-linebreak": "off",
      "padded-blocks": "off",
      "quote-props": "off",
      "rest-spread-spacing": "off",
      semi: "off",
      "semi-spacing": "off",
      "semi-style": "off",
      "space-after-function-name": "off",
      "space-after-keywords": "off",
      "space-before-blocks": "off",
      "space-before-function-paren": "off",
      "space-before-function-parentheses": "off",
      "space-before-keywords": "off",
      "space-in-brackets": "off",
      "space-in-parens": "off",
      "space-infix-ops": "off",
      "space-return-throw-case": "off",
      "space-unary-ops": "off",
      "space-unary-word-ops": "off",
      "switch-colon-spacing": "off",
      "template-curly-spacing": "off",
      "template-tag-spacing": "off",
      "unicode-bom": "off",
      "wrap-iife": "off",
      "wrap-regex": "off",
      "yield-star-spacing": "off",
    },
  },
}
