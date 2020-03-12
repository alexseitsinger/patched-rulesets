const groups = {
  core: [
    "eslint-comments",
    "node",
    "sort-requires",
    "import",
    "simple-import-sort",
    "unused-imports",
    "promise",
    "unicorn",
    "sort-destructure-keys",
    "no-loops",
    /*
     *  Sadly, this plugin causes issues with braces. We should do formatting in a second
     *  step, rather than integrating it into eslint directly.
     * "prettier",
     */
  ],
  react: ["react", "react-perf", "react-hooks", "better-styled-components"],
  redux: ["react-redux", "redux-saga"],
  typescript: ["@typescript-eslint/eslint-plugin", "tsdoc"],
  safety: ["security"],
  testing: ["jest", "jest-formatting"],
  json: ["json"],
  package: ["package-json"],
  prose: ["spellcheck", "markdown"],
}

const groupNames = Object.keys(groups)
const groupsWithoutCore = ["json", "package-json"]

function getPlugins(names) {
  const filteredNames = names.filter(n => n.toLowerCase() !== "core")
  const isWithCore = !filteredNames
    .map(n => groupsWithoutCore.includes(n))
    .includes(true)

  let plugins = [...(isWithCore ? groups.core : [])]

  filteredNames.forEach(groupName => {
    if (groupNames.includes(groupName)) {
      plugins = [...plugins, ...groups[groupName]]
    }
  })

  return plugins
}

module.exports = {
  getPlugins,
  groups,
}
