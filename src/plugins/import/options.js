module.exports = {
  env: {
    es6: true,
  },
  settings: {
    "import/internal-regex": "^packages/",
    "import/ignore": [
      "*.css",
      "*.json",
    ],
    "import/core-modules": [
      "electron",
    ],
    "import/external-module-folders": [
      "node_modules",
      ".yalc",
      "dist",
    ],
    "import/resolver": {
      node: {
        extensions: [ ".js", ".jsx", ".ts", ".tsx", ".json" ]
      },
      jest: {
        jestConfigFile: "./jest.config.js"
      }
    }
  }
}
