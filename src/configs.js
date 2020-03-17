const { createConfig } = require("./setup")
const { getPlugins } = require("./groups")

const nodeOnly = createConfig({
  pluginNames: getPlugins({
    names: [],
    isES6: false,
  }),
  useEslint: true,
})

const js = createConfig({
  pluginNames: getPlugins({
    names: [],
    isES6: true,
  }),
  useEslint: true,
})

const jsReact = createConfig({
  pluginNames: getPlugins({
    names: ["react"],
    isES6: true,
  }),
  useEslint: true,
})

const jsReactRedux = createConfig({
  pluginNames: getPlugins({
    names: [ "react", "redux" ],
    isES6: true,
  }),
  useEslint: true,
})

const ts = createConfig({
  pluginNames: getPlugins({
    names: ["typescript"],
    isES6: true,
  }),
  useEslint: true,
})

const tsReact = createConfig({
  pluginNames: getPlugins({
    names: [ "typescript", "react" ],
    isES6: true,
  }),
  useEslint: true,
})

const tsReactRedux = createConfig({
  pluginNames: getPlugins({
    names: [ "typescript", "react", "redux" ],
    isES6: true,
  }),
  useEslint: true,
})

const mdJs = createConfig({
  pluginNames: getPlugins({
    names: ["markdown"],
    isES6: true,
  }),
  useEslint: true,
})

const mdJsReact = createConfig({
  pluginNames: getPlugins({
    names: [ "markdown", "react" ],
    isES6: true,
  }),
  useEslint: true,
})

const mdJsReactRedux = createConfig({
  pluginNames: getPlugins({
    names: [ "markdown", "react", "redux" ],
    isES6: true,
  }),
  useEslint: true,
})

const mdTs = createConfig({
  pluginNames: getPlugins({
    names: [ "markdown", "typescript" ],
    isES6: true,
  }),
  useEslint: true,
})

const mdTsReact = createConfig({
  pluginNames: getPlugins({
    names: [ "markdown", "typescript", "react" ],
    isES6: true,
  }),
  useEslint: true,
})

const mdTsReactRedux = createConfig({
  pluginNames: getPlugins({
    names: [ "markdown", "typescript", "react", "redux" ],
    isES6: true,
  }),
  useEslint: true,
})

const json = createConfig({
  pluginNames: ["json"],
  useEslint: false,
})

const packageJson = createConfig({
  pluginNames: ["package-json"],
  useEslint: false,
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
