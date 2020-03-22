module.exports = {
  env: {
    jest: true,
  },
  settings: {
    "import/resolver": {
      jest: {
        jestConfigFile: "./jest.config.js"
      },
    },
  },
}
