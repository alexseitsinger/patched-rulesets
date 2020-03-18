const { createConfig } = require("../src/setup")
const { getPlugins } = require("../src/groups")

const patchedConfig = {
  quotes: "single",
  braceStyle: "stroustrup",
  spaces: 4,
  maxLength: 120,
}

describe("setup", () => {
  it("should only use a single plugin for packageJSON group", () => {
    const config = createConfig({
      pluginNames: getPlugins({
        names: ["packageJSON"],
        isES6: false,
      }),
      useEslint: false,
      patchedConfig,
    })

    const { rules, plugins } = config

    expect(plugins).toStrictEqual(["package-json"])
  })


  it("should use the provided patched config and adjust rules appropriately", () => {
    const config = createConfig({
      pluginNames: getPlugins({
        names: ["typescript"],
        isES6: true,
      }),
      useEslint: true,
      patchedConfig: patchedConfig,
    })

    const { rules } = config

    expect(rules.quotes).toStrictEqual("off")
    expect(rules["@typescript-eslint/quotes"]).toStrictEqual([
      "error",
      patchedConfig.quotes,
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      }
    ])

    expect(rules["max-len"]).toStrictEqual([
      "error",
      {
        code: patchedConfig.maxLength,
        tabWidth: patchedConfig.spaces,
        comments: patchedConfig.maxLength,
        ignorePattern: "^import\\W.*",
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ])

    expect(rules.indent).toStrictEqual("off")
    expect(rules["@typescript-eslint/indent"]).toStrictEqual([
      "error",
      patchedConfig.spaces,
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
  it("should use '@typescript-eslint/brace-style' and patch 'brace-style' off", () => {
    const config = createConfig({
      pluginNames: getPlugins({
        names: ["typescript"],
        isES6: true,
      }),
      useEslint: true,
    })

    const { rules } = config

    expect(rules["brace-style"]).toStrictEqual("off")
    expect(rules["@typescript-eslint/brace-style"]).toStrictEqual([
      "error",
      "stroustrup",
      {
        allowSingleLine: false,
      },
    ])
  })
})
