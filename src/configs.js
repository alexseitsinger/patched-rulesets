const { createConfig } = require("./setup")
const { getPlugins } = require("./groups")

const core = createConfig({
  pluginNames: [],
  useEslint: true,
})

const js = createConfig({
  pluginNames: getPlugins(["core"]),
  useEslint: true,
})

const jsReact = createConfig({
  pluginNames: getPlugins(["core", "react"]),
  useEslint: true,
})

const jsReactRedux = createConfig({
  pluginNames: getPlugins(["core", "react", "redux"]),
  useEslint: true,
})

const ts = createConfig({
  pluginNames: getPlugins(["core", "typescript"]),
  useEslint: true,
})

const tsReact = createConfig({
  pluginNames: getPlugins(["core", "typescript", "react"]),
  useEslint: true,
})

const tsReactRedux = createConfig({
  pluginNames: getPlugins(["core", "typescript", "react", "redux"]),
  useEslint: true,
})

const mdJs = createConfig({
  pluginNames: getPlugins(["core", "markdown"]),
  useEslint: true,
})

const mdJsReact = createConfig({
  pluginNames: getPlugins(["core", "react", "markdown"]),
  useEslint: true,
})

const mdJsReactRedux = createConfig({
  pluginNames: getPlugins(["core", "react", "redux", "markdown"]),
  useEslint: true,
})

const mdTs = createConfig({
  pluginNames: getPlugins(["core", "typescript", "markdown"]),
  useEslint: true,
})

const mdTsReact = createConfig({
  pluginNames: getPlugins(["core", "typescript", "react", "markdown"]),
  useEslint: true,
})

const mdTsReactRedux = createConfig({
  pluginNames: getPlugins(["core", "typescript", "react", "redux", "markdown"]),
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
  core,
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
