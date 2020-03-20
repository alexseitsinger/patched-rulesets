const { createConfig } = require("./setup")
const { getPlugins } = require("./groups")

const patchedConfig = {
  braceStyle: "stroustrup",
  semi: "never",
  quoteStyle: "double",
  nodeVersion: process && process.version || "12.0.0",
  spaces: 2,
  maxLength: 88,
  linebreakStyle: "unix",
  ecmaVersion: 2020,
}

const nodeOnly = createConfig({
  pluginNames: getPlugins({
    names: [],
    isES6: false,
  }),
  useEslint: true,
  patchedConfig,
})

const js = createConfig({
  pluginNames: getPlugins({
    names: [],
    isES6: true,
  }),
  useEslint: true,
  patchedConfig,
})

const jsReact = createConfig({
  pluginNames: getPlugins({
    names: ["react"],
    isES6: true,
  }),
  useEslint: true,
  patchedConfig,
})

const jsReactRedux = createConfig({
  pluginNames: getPlugins({
    names: [ "react", "redux" ],
    isES6: true,
  }),
  useEslint: true,
  patchedConfig,
})

const ts = createConfig({
  pluginNames: getPlugins({
    names: ["typescript"],
    isES6: true,
  }),
  useEslint: true,
  patchedConfig,
})

const tsReact = createConfig({
  pluginNames: getPlugins({
    names: [ "typescript", "react" ],
    isES6: true,
  }),
  useEslint: true,
  patchedConfig,
})

const tsReactRedux = createConfig({
  pluginNames: getPlugins({
    names: [ "typescript", "react", "redux" ],
    isES6: true,
  }),
  useEslint: true,
  patchedConfig,
})

const mdJs = createConfig({
  pluginNames: getPlugins({
    names: ["markdown"],
    isES6: true,
  }),
  useEslint: true,
  patchedConfig,
})

const mdJsReact = createConfig({
  pluginNames: getPlugins({
    names: [ "markdown", "react" ],
    isES6: true,
  }),
  useEslint: true,
  patchedConfig,
})

const mdJsReactRedux = createConfig({
  pluginNames: getPlugins({
    names: [ "markdown", "react", "redux" ],
    isES6: true,
  }),
  useEslint: true,
  patchedConfig,
})

const mdTs = createConfig({
  pluginNames: getPlugins({
    names: [ "markdown", "typescript" ],
    isES6: true,
  }),
  useEslint: true,
  patchedConfig,
})

const mdTsReact = createConfig({
  pluginNames: getPlugins({
    names: [ "markdown", "typescript", "react" ],
    isES6: true,
  }),
  useEslint: true,
  patchedConfig,
})

const mdTsReactRedux = createConfig({
  pluginNames: getPlugins({
    names: [ "markdown", "typescript", "react", "redux" ],
    isES6: true,
  }),
  useEslint: true,
  patchedConfig,
})

const json = createConfig({
  pluginNames: ["json"],
  useEslint: false,
  patchedConfig,
})

const packageJson = createConfig({
  pluginNames: ["package-json"],
  useEslint: false,
  patchedConfig,
})

module.exports = {
  nodeOnly,
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
  packageJson,
  json,
}
