/* eslint-disable no-param-reassign */
const {
  jsxIndentRule,
  jsxIndentPropsRule,
  normalizeReactSettings,
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

/**
 * Just to make sure everything is copacetic, we normalize the rules using the values
 * provided in the .pathchedrc.json file from the project.
 */
function normalize(
  config,
  patchedConfig,
) {
  const { rules } = config

  if (patchedConfig.linebreakStyle) {
    const { linebreakStyle } = patchedConfig
    normalizeRule(rules, "linebreak-style", linebreakStyleRule(linebreakStyle))
  }
  if (patchedConfig.maxLength && patchedConfig.spaces) {
    const { maxLength, spaces } = patchedConfig
    normalizeRule(rules, "max-len", maxLenRule(maxLength, spaces))
    normalizeRule(rules, "id-length", idLengthRule(maxLength))
    normalizeRule(rules, "indent", indentRule(spaces))
    normalizeRule(rules, "@typescript-eslint/indent", indentRule(spaces))
    normalizeRule(rules, "react/jsx-indent-props", jsxIndentPropsRule(spaces))
    normalizeRule(rules, "react/jsx-indent", jsxIndentRule(spaces))
  }
  if (patchedConfig.quoteStyle) {
    const { quoteStyle } = patchedConfig
    normalizeRule(rules, "quotes", quotesRule(quoteStyle))
    normalizeRule(rules, "@typescript-eslint/quotes", quotesRule(quoteStyle))
    normalizeRule(rules, "jsx-quotes", jsxQuotesRule(quoteStyle))
  }
  if (patchedConfig.semi) {
    const { semi } = patchedConfig
    normalizeRule(rules, "semi", semiRule(semi))
    normalizeRule(rules, "@typescript-eslint/semi", semiRule(semi))
  }
  if (patchedConfig.braceStyle) {
    const { braceStyle } = patchedConfig
    normalizeRule(rules, "brace-style", braceStyleRule(braceStyle))
    normalizeRule(rules, "@typescript-eslint/brace-style", braceStyleRule(braceStyle))
  }
  if (patchedConfig.nodeVersion) {
    const { nodeVersion } = patchedConfig
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
  }

  normalizeReactSettings(config)
}

module.exports = {
  normalize,
}

/* eslint-enable no-param-reassign */
