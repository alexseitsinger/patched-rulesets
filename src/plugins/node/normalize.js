const esBuiltinsRule = (nodeVersion) => {
  return [
    "error",
    {
      version: `>=${nodeVersion}`,
      ignores: [],
    },
  ]
}

const esSyntaxRule = (nodeVersion) => {
  return [
    "error",
    {
      version: `>=${nodeVersion}`,
      ignores: [],
    }
  ]
}

const nodeBuiltinsRule = (nodeVersion) => {
  return [
    "error",
    {
      version: `>=${nodeVersion}`,
      ignores: [],
    }
  ]
}

module.exports = {
  nodeBuiltinsRule,
  esSyntaxRule,
  esBuiltinsRule,
}