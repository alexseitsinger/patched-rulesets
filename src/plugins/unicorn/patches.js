module.exports = {
  eslint: {
    /**
     * Unicorn  has an enhanced version of this rule.
     */
    "no-nested-ternary": "off",

    /**
     * Unsure why this is here...
     */
    "prefer-destructuring": [
      "error",
      {
        object: true,
        array: false,
      },
    ],
  },
  "react-redux": {
    /**
     * We prefer to use 'unicorn/filename-case' over this rule.
     */
    "react-redux/connect-prefer-named-arguments": "off",
  },
}
