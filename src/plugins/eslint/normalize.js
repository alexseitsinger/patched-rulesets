/**
 * We specify some specific ignore patterns to exclude from our max-len rule.
 * This should prevent our imports and require paths from wrapping to a second line.
 */
const requireStatement = `^(var|let|const)\\s.+\\s*=\\s*require\\(['"].+['"]\\);?$`
const importStatement = `^import\\s.+\\sfrom\\s['"].+['"];?$`
const maxLengthIgnorePattern = `(${requireStatement})|(${importStatement})`

const linebreakStyle = style => {
  return ["error", style]
}

const braceStyle = (style) => {
  return [
    "error",
    style,
    {
      allowSingleLine: false,
    },
  ]
}

const idLength = (maxLength) => {
  return [
    "error",
    {
      /**
       * We sometimes use single letter variables, so make sure the minimum is 1.
       */
      min: 1,
      /**
       * This should be the same value as max-len.
       */
      max: maxLength,
      properties: "always",
      exceptions: [],
    }
  ]
}

const indent = (spaces) => {
  return [
    "error",
    spaces,
    {
      SwitchCase: 1,
      VariableDeclarator: {
        var: 2,
        let: 2,
        const: 3,
      },
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: {
        parameters: "first",
        body: 1,
      },
      FunctionExpression: {
        parameters: "first",
        body: 1,
      },
      CallExpression: {
        arguments: "first",
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: true,
      ignoredNodes: [],
      ignoreComments: false,
    },
  ]
}

const maxLen = (maxLength, spaces) => {
  return  [
    "error",
    {
      code: maxLength,
      tabWidth: spaces,
      comments: maxLength,
      /*
       * Setting an ignore pattern according to suggestion on github.
       * https://github.com/prettier/prettier/issues/1954
       */
      ignorePattern: maxLengthIgnorePattern,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ]
}

const jsxQuotes = (preferredStyle) => {
  return [
    "error",
    preferredStyle,
  ]
}

const quotes = (quotes) => {
  return [
    "error",
    quotes,
    {
      avoidEscape: true,
      allowTemplateLiterals: true,
    },
  ]
}

const semi = (when) => {
  return [
    "error",
    when,
    {
      beforeStatementContinuationChars: "any",
    },
  ]
}

module.exports = {
  braceStyle,
  idLength,
  indent,
  maxLen,
  jsxQuotes,
  quotes,
  semi,
  linebreakStyle,
}