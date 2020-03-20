const { createConfig } = require("../src/setup")
const { getPlugins } = require("../src/groups")
const {
  braceStyleRule,
  maxLenRule,
  quotesRule,
  indentRule,
} = require("../src/plugins/eslint/normalize")

const patchedConfig = {
  quoteStyle: "single",
  braceStyle: "stroustrup",
  spaces: 4,
  maxLength: 120,
  linebreakStyle: "unix",
  semi: "never",
  nodeVersion: process.version,
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

    const { plugins } = config

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
    expect(rules["@typescript-eslint/quotes"])
      .toStrictEqual(quotesRule(patchedConfig.quoteStyle))

    expect(rules["max-len"])
      .toStrictEqual(maxLenRule(patchedConfig.maxLength, patchedConfig.spaces))

    expect(rules.indent).toStrictEqual("off")
    expect(rules["@typescript-eslint/indent"])
      .toStrictEqual(indentRule(patchedConfig.spaces))

    expect(rules["brace-style"]).toStrictEqual("off")
    expect(rules["@typescript-eslint/brace-style"])
      .toStrictEqual(braceStyleRule(patchedConfig.braceStyle))
  })
})
