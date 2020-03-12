const DEFAULT_SEMI_VALUE = "never"
const DEFAULT_INDENT_VALUE = 2
const DISABLED_RULE_VALUES = ["off", 0]

function isDisabledRule(lintLevel) {
  return DISABLED_RULE_VALUES.includes(lintLevel)
}

const createIndentRule = spaces => {
  return [
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
  ]
}

function normalizeSemiRules(config, value = DEFAULT_SEMI_VALUE) {
  /* eslint-disable no-param-reassign */
  if (!isDisabledRule(config.rules.semi)) {
    config.rules.semi = ["error", value]
  }
  if (!isDisabledRule(config.rules["semi-spacing"])) {
    config.rules["semi-spacing"] = [
      "error",
      {
        before: false,
        after: true,
      },
    ]
  }
  /* eslint-enable no-param-reassign */
}

function normalizeIndentRules(config, spaces = DEFAULT_INDENT_VALUE) {
  /* eslint-disable no-param-reassign */
  const { rules } = config
  const indentRules = ["indent", "@typescript-eslint/indent"]
  const indentReactRules = ["react/jsx-indent-props", "react/jsx-indent"]

  indentRules.forEach(ruleName => {
    if (ruleName in rules) {
      const [lintLevel] = rules[ruleName]

      if (isDisabledRule(lintLevel)) {
        return
      }

      config.rules[ruleName] = createIndentRule(spaces)
    }
  })

  indentReactRules.forEach(ruleName => {
    if (ruleName in rules) {
      const [lintLevel] = rules[ruleName]

      if (isDisabledRule(lintLevel)) {
        return
      }

      config.rules[ruleName] = ["error", spaces]
    }
  })
  /* eslint-enable no-param-reassign */
}

function normalizeRules(config, { semi, spaces }) {
  normalizeIndentRules(config, spaces)
  normalizeSemiRules(config, semi)
}

module.exports = {
  normalizeRules,
}
