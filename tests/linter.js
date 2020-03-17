const path = require("path")

/* eslint-disable import/no-extraneous-dependencies */
const { CLIEngine } = require("eslint")
/* eslint-enable import/no-extraneous-dependencies */

const rootPath = path.resolve(process.cwd())

module.exports = config => {
  const newConfig = {
    useEslintrc: false,
    baseConfig: {
      settings: config.settings,
    },
    plugins: config.plugins,
    parserOptions: config.parserOptions,
    parser: config.parser || "espree",
    rules: config.rules,
    cwd: rootPath,
    resolvePluginsRelativeTo: rootPath,
    envs: Object.keys(config.env),
  }
  if (newConfig.parser.includes("@typescript-eslint/parser")) {
    newConfig.parserOptions = {
      ...newConfig.parserOptions,
      project: `${rootPath}/tests/tsconfig.json`,
      createDefaultProgram: true,
    }
  }
  const engine = new CLIEngine(newConfig)
  const report = engine.executeOnText("")
  return report
}
