module.exports = {
  eslint: {
    /**
     * Stroustrup fucks up with prettier.
     */

    "brace-style": [
      "error",
      "1tbs",
      {
        allowSingleLine: true,
      },
    ],

    // Indent: "off",

    /**
     * If we are using implicit arrow funcs, and we have linebreaks forbidden,
     * the arrow functions will exceed beyond the value of 'printWidth' that we
     * specifiy. To prevent this, disable the rule entirely so we can still use
     * single-line arrow functions manually.
     */

    "implicit-arrow-linebreak": "off",

    /**
     * Just to make sure our formatting lines up, make sure some other rules match our
     * prettier config.
     */

    "arrow-parens": [
      "error",
      "as-needed",
      {
        requireForBlockBody: false,
      },
    ],

    /**
     * These rules are known to be troublesome when eslint --fix is combined with
     * eslint-plugin-prettier.
     *
     * See:
     * https://github.com/prettier/eslint-config-prettier/issues/31
     * https://github.com/prettier/eslint-config-prettier/issues/71
     * https://github.com/prettier/eslint-plugin-prettier/issues/65
     */

    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",

    /**
     * If you use the "multi-line" or "multi-or-nest" option, the rule can conflict with
     * Prettier.
     */

    curly: ["error", "all"],

    /**
     * This rule requires empty lines before and/or after comments. Prettier preserves
     * blank lines, with two exceptions:
     *
     * Several blank lines in a row are collapsed into a single blank line. This is
     * fine.
     *
     * Blank lines at the beginning and end of blocks, objects and arrays are always
     * removed. This may lead to conflicts.
     */

    "lines-around-comment": [
      "error",
      {
        beforeBlockComment: true,
        afterBlockComment: true,
        beforeLineComment: true,
        afterLineComment: true,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
      },
    ],

    /**
     * If the value of max-len is not the same as the printWidth value for
     * prettier, this will fuck up formatting.
     *
     * Many recommend disabling this rule completely with prettier.
     *
     * Usually, Prettier takes care of following a maximum line length automatically.
     * However, there are cases where Prettier can’t do anything, such as for long
     * strings, regular expressions and comments. Those need to be split up by a human.
     *
     * If you’d like to enforce an even stricter maximum line length policy than
     * Prettier can provide automatically, you can enable this rule. Just remember to
     * keep max-len’s options and Prettier’s printWidth option in sync.
     *
     * Keep in mind that you might have to refactor code slightly if Prettier formats
     * lines in a way that the max-len rule does not approve of.
     */

    // "max-len": "off",

    /**
     * If you like this rule, it can be used just fine with Prettier as long as the
     * allowParens option is off.
     */

    "no-confusing-arrow": [
      "error",
      {
        allowParens: false,
      },
    ],

    /**
     * If you want to use this rule with Prettier, you need to split the expression into
     * another variable:
     */

    "no-mixed-operators": "off",

    /**
     * This rule disallows the use of tab characters at all. It can be used just fine
     * with Prettier as long as you don’t configure Prettier to indent using tabs.
     */
    // "no-tabs": "off",

    /**
     * However, there are cases where Prettier breaks things into several lines such
     * that the no-unexpected-multiline conflicts.
     */

    "no-unexpected-multiline": "off",

    /**
     * Make sure prettier uses 'singleQuote': false with this
     */

    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
  },
}
