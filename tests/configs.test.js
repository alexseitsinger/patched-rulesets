const configs = require("../src/configs")
const linter = require("./linter")

const configNames = Object.keys(configs)

describe("configs", () => {
  [ "nodeOnly", "js" ].forEach(configName => {
    it(`should lint use the '${configName}' config`, () => {
      const config = configs[configName]
      const report = linter(config)
      expect(report.results[0].messages).toStrictEqual([])
    })
  })
})
