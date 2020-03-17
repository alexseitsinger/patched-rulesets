const groups = {
  core: [
    "eslint-comments",
    "node",
    "sort-requires",
    "no-loops",
    "jest",
    "jest-formatting",
  ],
  coreES6: [
    "unicorn",
    "import",
    "simple-import-sort",
    "unused-imports",
    "sort-destructure-keys",
    "promise",
  ],
  react: [ "react", "react-hooks", "react-perf" ],
  reactES6: ["better-styled-components"],
  redux: [ "react-redux", "redux-saga" ],
  typescript: [ "@typescript-eslint/eslint-plugin", "tsdoc" ],
  safety: ["security"],
  json: ["json"],
  package: ["package-json"],
  prose: [ "spellcheck", "markdown" ],
}

const groupNames = Object.keys(groups)
const groupsWithoutCore = [ "json", "package" ]

function getPlugins({ names = [], isES6 = false }) {
  const filteredNames = names.filter(n => n.toLowerCase() !== "core")
  const isWithCore = !filteredNames
    .map(n => groupsWithoutCore.includes(n))
    .includes(true)

  let plugins = [
    ...(isWithCore ? groups.core : []),
    ...(isES6 ? groups.coreES6 : []),
  ]

  filteredNames.forEach(groupName => {
    if (groupNames.includes(groupName)) {
      plugins = [ ...plugins, ...groups[groupName] ]
      if (groupName === "react" && isES6) {
        plugins = [ ...plugins, ...groups.reactES6 ]
      }
    }
  })

  return plugins
}

module.exports = {
  getPlugins,
  groups,
}
