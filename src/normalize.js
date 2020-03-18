/* eslint-disable no-param-reassign */
const readPkgUp = require("read-pkg-up")

const ENABLED_RULE_LEVELS = [ "warn", 1, "error", 2 ]
const DEFAULT_VALUES = {
  quotes: "double",
  semi: "never",
  spaces: 2,
  braceStyle: "stroustrup",
  maxLength: 88,
  nodeVersion: process && process.version,
}

const getReactVersion = async () => {
  const output = await readPkgUp()
  const keys = [
    "dependencies",
    "peerDepedencies",
    "optionalDependencies",
    "devDependencies",
  ]
  let version = "detect"
  if (output !== undefined && "packageJson" in output) {
    keys.forEach(key => {
      if (version !== "detect") {
        return
      }
      if (key in output.packageJson) {
        const deps = output.packageJson[key]
        Object.keys(deps).forEach(depName => {
          if (depName === "react") {
            version = deps[depName]
          }
        })
      }
    })
  }

  return version
}

const getReactVersionSync = () => {
  const output = readPkgUp.sync()
  const keys = [
    "dependencies",
    "peerDepedencies",
    "optionalDependencies",
    "devDependencies",
  ]
  let version = "detect"
  if (output !== undefined && "packageJson" in output) {
    keys.forEach(key => {
      if (version !== "detect") {
        return
      }
      if (key in output.packageJson) {
        const deps = output.packageJson[key]
        Object.keys(deps).forEach(depName => {
          if (depName === "react") {
            version = deps[depName]
          }
        })
      }
    })
  }

  return version
}

const normalizeImportSettings = config => {
  const isReact = config.plugins.includes("react")
  if (isReact) {
    config.settings = {
      ...config.settings,
      react: {
        ...config.settings.react,
        version: getReactVersionSync(),
      },
    }
  }
}


function normalizeEnabledRule(rules, ruleName, value) {
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

  normalizeEnabledRule(rules, "id-length", [
    "error",
    {
      min: 1,
      max: maxLength,
      properties: "always",
      exceptions: [],
    },
  ])
}

function normalizeSemiRules(rules, value = DEFAULT_VALUES.semi) {
  const semiRuleNames = [ "semi", "@typescript-eslint/semi" ]
  semiRuleNames.forEach(ruleName => {
    normalizeEnabledRule(rules, ruleName, [ "error", value ])
  })

  const noExtraRules = [ "no-extra-semi", "@typescript-eslint/no-extra-semi" ]
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

function normalizeIndentRules(rules, spaces = DEFAULT_VALUES.spaces) {
  const indentRules = [ "indent", "@typescript-eslint/indent" ]
  const indentReactRules = [ "react/jsx-indent-props", "react/jsx-indent" ]

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
        outerIIFEBody: 1,
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
    normalizeEnabledRule(rules, ruleName, [ "error", spaces ])
  })
}

function normalizeBraceStyleRules(rules, value = DEFAULT_VALUES.braceStyle) {
  const ruleNames = [ "brace-style", "@typescript-eslint/brace-style" ]

  ruleNames.forEach(ruleName => {
    normalizeEnabledRule(rules, ruleName, [
      "error",
      value,
      {
        allowSingleLine: false,
      },
    ])
  })
}

function normalizeQuotesRules(rules, value = DEFAULT_VALUES.quotes) {
  const ruleNames = [ "quotes", "@typescript-eslint/quotes" ]

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
      normalizeEnabledRule(rules, jsxQuotes, [ "error", "prefer-double" ])
      break
    }
    case "single": {
      normalizeEnabledRule(rules, jsxQuotes, [ "error", "prefer-single" ])
      break
    }
    default: {
      normalizeEnabledRule(rules, jsxQuotes, [ "error", "prefer-double" ])
    }
  }
}

function normalizeFeatureVersions(rules, nodeVersion = DEFAULT_VALUES.nodeVersion) {
  /**
   * The version number is read from package.json, but it can also be specified here.
   */
  const nodeVersionRules = [
    "node/no-unsupported-features/node-builtins",
    "node/no-unsupported-features/es-builtins",
    "node/no-unsupported-features/es-syntax",
  ]
  nodeVersionRules.forEach(ruleName => {
    normalizeEnabledRule(rules, ruleName, [
      "error",
      {
        version: `>=${nodeVersion}`,
        ignores: [ruleName.includes("/es-syntax") ? "module" : ""],
      },
    ])
  })
}

function normalizeRules(
  config,
  { braceStyle, maxLength, nodeVersion, quotes, semi, spaces }
) {
  const { rules } = config

  normalizeIndentRules(rules, spaces)
  normalizeSemiRules(rules, semi)
  normalizeBraceStyleRules(rules, braceStyle)
  normalizeQuotesRules(rules, quotes)
  normalizeMaxLength(rules, maxLength, spaces)
  normalizeFeatureVersions(rules, nodeVersion)
  normalizeImportSettings(config)
}

module.exports = {
  normalizeRules,
}

/* eslint-enable no-param-reassign */
