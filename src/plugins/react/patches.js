module.exports = {
  "@typescript-eslint": {
    /**
     * THis rule conflicts with jsx-wrap-multilines, so to prevent an infinite cycle of
     * eslint errors, we just disable this rule completely
     */
    "@typescript-eslint/no-extra-parens": "off",
  },
  "eslint": {
    ""
  }

}
