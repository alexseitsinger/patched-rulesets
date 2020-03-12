module.exports = {
  eslint: {
    /**
     * Unicorn  has an enhanced version of this rule.
     */
    "no-nested-ternary": "off",
  },
  "react-redux": {
    /**
     * We prefer to use 'unicorn/filename-case' over this rule.
     */
    "react-redux/connect-prefer-named-arguments": "off",
  },
  "eslint-comments": {
    /**
     * We prefer the uniron rule, so disabled this to prevent redundant errors.
     */
    "eslint-comments/no-unlimited-disable": "off",
  },
}
