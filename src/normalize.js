/* eslint-disable no-param-reassign */

const DISABLED_RULE_VALUES = ["off", 0]
const DEFAULT_VALUES = {
  quotes: "double",
  semi: "never",
  spaces: 2,
  braceStyle: "stroustrup",
  maxLength: 88,
  ecmaVersion: "8.0.0",
  nodeVersion: "12.0.0",
}

function isDisabledRule(lintLevel) {
  return DISABLED_RULE_VALUES.includes(lintLevel)
}

function normalizeEnabledRule(rules, ruleName, value) {
  if (ruleName in rules) {
    const [lintLevel] = rules[ruleName]

    if (isDisabledRule(lintLevel)) {
      return
    }

    rules[ruleName] = value
  }
}

function normalizeMaxLength(
  rules,
  maxLength = DEFAULT_VALUES.maxLength,
  tabWidth = DEFAULT_VALUES.spaces
) {
  normalizeEnabledRule(rules, "max-len", [
    "error",
    {
      code: maxLength,
      tabWidth: tabWidth,
      comments: maxLength,
      /*
       * Setting an ignore pattern according to suggestion on github.
       * https://github.com/prettier/prettier/issues/1954
       */
      ignorePattern: "^import\\W.*",
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ])
}

function normalizeSemiRules(rules, value = DEFAULT_VALUES.semi) {
  const semiRuleNames = ["semi", "@typescript-eslint/semi"]
  semiRuleNames.forEach(ruleName => {
    normalizeEnabledRule(rules, ruleName, ["error", value])
  })

  const noExtraRules = ["no-extra-semi", "@typescript-eslint/no-extra-semi"]
  noExtraRules.forEach(ruleName => {
    normalizeEnabledRule(rules, ruleName, "error")
  })

  normalizeEnabledRule(rules, "semi-spacing", [
    "error",
    {
      before: false,
      after: true,
    },
  ])
}

function normalizeIndentRules(rules, spaces = DEFAULT_VALUES.indent) {
  const indentRules = ["indent", "@typescript-eslint/indent"]
  const indentReactRules = ["react/jsx-indent-props", "react/jsx-indent"]

  indentRules.forEach(ruleName => {
    normalizeEnabledRule(rules, ruleName, [
      "error",
      spaces,
      {
        SwitchCase: 1,
        VariableDeclarator: {
          var: 2,
          let: 2,
          const: 3,
        },
        outerIIFEBody: 0,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: "first",
          body: 1,
        },
        FunctionExpression: {
          parameters: "first",
          body: 1,
        },
        CallExpression: {
          arguments: "first",
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: true,
        ignoredNodes: [],
        ignoreComments: false,
      },
    ])
  })

  indentReactRules.forEach(ruleName => {
    normalizeEnabledRule(rules, ruleName, ["error", spaces])
  })
}

function normalizeBraceStyleRules(rules, value = DEFAULT_VALUES.braceStyle) {
  const ruleNames = ["brace-style", "@typescript-eslint/brace-style"]

  ruleNames.forEach(ruleName => {
    normalizeEnabledRule(rules, ruleName, [
      "error",
      value,
      {
        allowSingleLine: false,
      }
    ])
  })
}

function normalizeQuotesRules(rules, value = DEFAULT_VALUES.quotes) {
  const ruleNames = ["quotes", "@typescript-eslint/quotes"]

  ruleNames.forEach(ruleName => {
    normalizeEnabledRule(rules, ruleName, [
      "error",
      value,
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ])
  })

  const jsxQuotes = "jsx-quotes"
  switch (value) {
    case "double": {
      normalizeEnabledRule(rules, jsxQuotes, "prefer-double")
      break
    }
    case "single": {
      normalizeEnabledRule(rules, jsxQuotes, "prefer-single")
      break
    }
    default: {
      normalizeEnabledRule(rules, jsxQuotes, "prefer-double")
    }
  }
}

function normalizeFeatureVersions(rules, nodeVersion = DEFAULT_VALUES.nodeVersion, ecmaVersion = DEFAULT_VALUES.ecmaVersion) {
  /**
   * The version number is read from package.json, but it can also be specified here.
   */
  const nodeVersionRules = [
    "node/no-unsupported-features/node-builtins",
  ]
  nodeVersionRules.forEach(ruleName => {
    normalizeEnabledRule(rules, ruleName, [
      "error", {
        version: `>=${nodeVersion}`,
        ignores: [],
      },
    ])
  })

  const ecmaVersionRules = [
      "node/no-unsupported-features/es-builtins",
      "node/no-unsupported-features/es-syntax",
  ]
  ecmaVersionRules.forEach(ruleName => {
    normalizeEnabledRule(rules, ruleName, [
      "error", {
        version: `>=${ecmaVersion}`,
        ignores: [],
      }
    ])
  })
}

function normalizeRules(config, { braceStyle, maxLength, quotes, nodeVersion, semi, spaces, ecmaVersion }) {
  const { rules } = config

  normalizeIndentRules(rules, spaces)
  normalizeSemiRules(rules, semi)
  normalizeBraceStyleRules(rules, braceStyle)
  normalizeQuotesRules(rules, quotes)
  normalizeMaxLength(rules, maxLength, spaces)
  normalizeFeatureVersions(rules, nodeVersion, ecmaVersion)
}

module.exports = {
  normalizeRules,
}

/* eslint-enable no-param-reassign */
