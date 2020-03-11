# QT Rulesets

Rulsets for the generating eslint configs used with QT. This package isn't necessary to install manually as it's already used by the [https://github.com/alexseitsinger/qt](QT).

## Installation

```bash
yarn add qt-rulesets
```

***

#### createConfig

Returns a complete eslint configuration object that contains rules for the plugins of each specified plugin group.

```javascript
const { createConfig, getPlugins } = require("qt-rulesets")

const jsConfig = createConfig({
  pluginNames: getPlugins(["react"]),
})

module.exports = {
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      ...jsConfig,
    }
  ],
}
```

---

#### getRuleSet

Returns the rules, patches, and options for the specified plugin. This is used internally by createConfig, but exposed in case some extra manual adjustments are necessary.

```javascript
const { getRuleSet } = require("qt-rulesets")

const reactRuleSet = getRuleSet("react")
// { rules: {...}, patches: {...}, options: {...} }

module.exports = {
  // ...
  ...reactRuleSet.options,
  rules: {
    ...reactRuleSet.patches.eslint,
    ...reactRuleSet.rules,
  },
}
```

---

#### groups

Returns an array of plugin group names.

Name        | Plugins included
---         | ---
core        | eslint-comments, node, sort-requires, import, simple-import-sort, unused-imports, promise, unicorn, sort-destructure-keys, no-loops, prettier
react       | react, react-perf, react-hooks, better-styled-components
redux       | react-redux, redux-saga
typescript  | tsdoc, @typescript-eslint
safety      | security
prose       | markdown, spellcheck
json        | json
jsonPackage | package-json

---

#### getPlugins

Converts the provided array of group names into the actual list of plugin names.

```javascript
const { getPlugins } = require("qt-rulesets")

const plugins = getPlugins(["react"])
// -> ["react", "react-hooks", "react-perf", "better-styled-components"]
```

---

#### configs

A collection of preset configurations that are generated from the methods above.

Name           | Plugin groups used
---            | ---
js             | core
jsReact        | core, react
jsReactRedux   | core, react, redux
ts             | core, typescript
tsReact        | core, typescript, react
tsReactRedux   | core, typescript, react, redux
mdJs           | core, prose
mdJsReact      | core, prose, react
mdJsReactRedux | core, prose, react, redux
mdTs           | core, prose, typescript
mdTsReact      | core, prose, react, typescript
mdTsReactRedux | core, prose, react, redux, typescript
json           | json
jsonPackage    | jsonPackage

