const { createConfig } = require("./setup")
const { getPlugins } = require("./groups")

const js = createConfig({
  pluginNames: getPlugins([]),
  useEslint: true,
})

const jsReact = createConfig({
  pluginNames: getPlugins(["react"]),
  useEslint: true,
})

const jsReactRedux = createConfig({
  pluginNames: getPlugins(["react", "redux"]),
  useEslint: true,
})

const ts = createConfig({
  pluginNames: getPlugins(["typescript"]),
  useEslint: true,
})

const tsReact = createConfig({
  pluginNames: getPlugins(["typescript", "react"]),
  useEslint: true,
})

const tsReactRedux = createConfig({
  pluginNames: getPlugins(["typescript", "react", "redux"]),
  useEslint: true,
})

const mdJs = createConfig({
  pluginNames: getPlugins(["markdown"]),
  useEslint: true,
})

const mdJsReact = createConfig({
  pluginNames: getPlugins(["react", "markdown"]),
  useEslint: true,
})

const mdJsReactRedux = createConfig({
  pluginNames: getPlugins(["react", "redux", "markdown"]),
  useEslint: true,
})

const mdTs = createConfig({
  pluginNames: getPlugins(["typescript", "markdown"]),
  useEslint: true,
})

const mdTsReact = createConfig({
  pluginNames: getPlugins(["typescript", "react", "markdown"]),
  useEslint: true,
})

const mdTsReactRedux = createConfig({
  pluginNames: getPlugins(["typescript", "react", "redux", "markdown"]),
  useEslint: true,
})

const json = createConfig({
  pluginNames: ["json"],
  useEslint: false,
})

const jsonPackage = createConfig({
  pluginNames: ["package-json"],
  useEslint: false,
})

module.exports = {
  js,
  jsReact,
  jsReactRedux,
  ts,
  tsReact,
  tsReactRedux,
  mdJs,
  mdJsReact,
  mdJsReactRedux,
  mdTs,
  mdTsReact,
  mdTsReactRedux,
  json,
  jsonPackage,
}
