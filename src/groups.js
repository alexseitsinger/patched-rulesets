const core = [
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
  "prettier",
]
const react = ["react", "react-perf", "react-hooks", "better-styled-components"]
const redux = ["react-redux", "redux-saga"]
const typescript = ["@typescript-eslint/eslint-plugin", "jsx-falsy", "tsdoc"]
const safety = ["security"]
const testing = ["jest", "jest-formatting"]
const json = ["json"]
const jsonPackage = ["package-json"]
const other = ["markdown", "spellcheck"]

const groups = {
  core,
  react,
  redux,
  typescript,
  safety,
  testing,
  json,
  jsonPackage,
  other,
}

const excludedGroupNames = ["json", "jsonPackage"]
const groupNames = Object.keys(groups)

function getPlugins(names) {
  const filteredNames = names.filter(n => n !== "core")
  const isWithCore = !filteredNames
    .map(n => excludedGroupNames.includes(n))
    .includes(true)
  let plugins = [...(isWithCore ? core : [])]

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
