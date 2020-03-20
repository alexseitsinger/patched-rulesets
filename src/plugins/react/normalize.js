const readPkgUp = require("read-pkg-up")

const getReactVersion = () => {
  const output = readPkgUp.sync()
  const keys = [
    "dependencies",
    "peerDepedencies",
    "optionalDependencies",
    "devDependencies",
  ]
  let version = "detect"
  if (output !== undefined && "packageJson" in output) {
    keys.forEach(key => {
      if (version !== "detect") {
        return
      }
      if (key in output.packageJson) {
        const deps = output.packageJson[key]
        Object.keys(deps).forEach(depName => {
          if (depName === "react") {
            version = deps[depName]
          }
        })
      }
    })
  }

  return version
}

const loadReactSettings = config => {
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
  loadReactSettings,
  jsxIndentRule,
  jsxIndentPropsRule,
}