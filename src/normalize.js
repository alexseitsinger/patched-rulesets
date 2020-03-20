/* eslint-disable no-param-reassign */
const {
  jsxIndentRule,
  jsxIndentPropsRule,
  loadReactSettings,
} = require("./plugins/react/normalize")
const {
  maxLenRule,
  idLengthRule,
  semiRule,
  indentRule,
  braceStyleRule,
  quotesRule,
  jsxQuotesRule,
  linebreakStyleRule,
} = require("./plugins/eslint/normalize")
const {
  nodeBuiltinsRule,
  esSyntaxRule,
  esBuiltinsRule,
} = require("./plugins/node/normalize")

function normalizeRule(rules, ruleName, value) {
  const ENABLED_RULE_LEVELS = ["warn", 1, "error", 2]
  if (ruleName in rules) {
    const opt = rules[ruleName]
    if (Array.isArray(opt)) {
      const [lintLevel] = opt
      if (ENABLED_RULE_LEVELS.includes(lintLevel)) {
        rules[ruleName] = value
      }
    }
    if (ENABLED_RULE_LEVELS.includes(opt)) {
      rules[ruleName] = value
    }
  }
}

function normalizeRules(
  config,
  { braceStyle, maxLength, nodeVersion, quotes, semi, spaces, linebreakStyle }
) {
  const { rules } = config
  normalizeRule(rules, "linebreak-style", linebreakStyleRule(linebreakStyle))
  normalizeRule(rules, "max-len", maxLenRule(maxLength, spaces))
  normalizeRule(rules, "id-length", idLengthRule(maxLength))
  normalizeRule(rules, "semi", semiRule(semi))
  normalizeRule(rules, "@typescript-eslint/semi", semiRule(semi))
  normalizeRule(rules, "indent", indentRule(spaces))
  normalizeRule(rules, "@typescript-eslint/indent", indentRule(spaces))
  normalizeRule(rules, "brace-style", braceStyleRule(braceStyle))
  normalizeRule(rules, "@typescript-eslint/brace-style", braceStyleRule(braceStyle))
  normalizeRule(rules, "quotes", quotesRule(quotes))
  normalizeRule(rules, "@typescript-eslint/quotes", quotesRule(quotes))
  normalizeRule(rules, "jsx-quotes", jsxQuotesRule(quotes))
  normalizeRule(rules, "react/jsx-indent-props", jsxIndentPropsRule(spaces))
  normalizeRule(rules, "react/jsx-indent", jsxIndentRule(spaces))
  normalizeRule(
    rules,
    "node/no-unsupported-features/node-builtins",
    nodeBuiltinsRule(nodeVersion)
  )
  normalizeRule(
    rules,
    "node/no-unsupported-features/es-builtins",
    esBuiltinsRule(nodeVersion)
  )
  normalizeRule(
    rules,
    "node/no-unsupported-features/es-syntax",
    esSyntaxRule(nodeVersion)
  )
  loadReactSettings(config)
}

module.exports = {
  normalizeRules,
}

/* eslint-enable no-param-reassign */
