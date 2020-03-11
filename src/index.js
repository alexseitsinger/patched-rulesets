const configs = require("./configs")
const { createConfig, getRuleSet } = require("./setup")
const { getPlugins, groups } = require("./groups")

module.exports = {
  configs,
  groups,
  getPlugins,
  createConfig,
  getRuleSet,
}
