const readPkgUp = require("read-pkg-up")

const keys = [
  "dependencies",
  "peerDepedencies",
  "optionalDependencies",
  "devDependencies",
]

const getReactVersion = () => {
  let version = "detect"
  try {
    const pkg = readPkgUp.sync()
    if (pkg !== undefined && "packageJson" in pkg) {
      keys.forEach(key => {
        if (version !== "detect") {
          return
        }
        if (key in pkg.packageJson) {
          const deps = pkg.packageJson[key]
          Object.keys(deps).forEach(depName => {
            if (depName === "react") {
              version = deps[depName]
            }
          })
        }
      })
    }
  }
  catch (error) {
    //...
  }
  return version
}

const normalizeReactSettings = config => {
  if (config.plugins.includes("react")) {
    config.settings = {
      ...config.settings,
      react: {
        ...config.settings.react,
        version: getReactVersion(),
      },
    }
  }
}

const jsxIndentPropsRule = (spaces) => {
  return ["error", spaces]
}

const jsxIndentRule = (spaces) => {
  return [
    "error",
    spaces,
    {
      checkAttributes: true,
      indentLogicalExpressions: true,
    },
  ]
}

module.exports = {
  normalizeReactSettings,
  jsxIndentRule,
  jsxIndentPropsRule,
}
