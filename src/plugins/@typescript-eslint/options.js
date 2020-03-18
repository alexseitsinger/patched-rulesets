module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: ".",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [ ".ts", ".tsx" ],
    },
    "import/extensions": [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
    ],
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
