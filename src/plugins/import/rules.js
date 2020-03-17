/**
 * https://github.com/benmosher/eslint-plugin-import
 */

module.exports = {
  /**
   * Ensure all imports appear before other statements.
   *
   * NOTE: patches in typescript-eslint
   * NOTE: patches because problems with TypeScript when mixed ESM and CJS.
   *        (see xo plugin)
   *
   */
  "import/first": "error",

  /**
   * Ensure all exports appear after other statements,
   *
   * NOTES:
   * - With React, we sometimes export stateless functional components, then
   *   define its propType below, so perhaps disable this rule.
   *
   * - After moving to TypeScript, we no longer use PropTypes, so no need to keep this
   *   rule disabled (at least from here).
   */
  "import/exports-last": "off",

  /**
   * Report repeated import of the same module in multiple places.
   */
  "import/no-duplicates": "error",

  /**
   * Report namespace imports.
   */
  "import/no-namespace": "off",

  /**
   * Ensure consistent use of file extension within the import path.
   */
  "import/extensions": [
    "error",
    {
      js: "never",
      jsx: "never",
      ts: "never",
      tsx: "never",
      json: "always",
      css: "always",
      ico: "always",
      svg: "always",
      png: "always",
      jpg: "always",
      gif: "always",
      ttf: "always",
      otf: "always",
    },
  ],

  /**
   * Enforce a convention in module import order.
   *
   * NOTES
   * - Disabled in simple-import-sort
   */
  "import/order": [
    "error",
    {
      groups: [
        ["builtin"],
        ["external"],
        [ "internal", "parent", "sibling", "index", "unknown" ],
      ],
      "newlines-between": "always-and-inside-groups",
    },
  ],

  /**
   * Enforce a newline after import statements.
   *
   * NOTES
   * - Disabled (in @typescript-eslint) as it doesn't work with it. (according to XO)
   */
  "import/newline-after-import": [
    "error",
    {
      count: 1,
    },
  ],

  /**
   * Prefer a default export if module exports a single name.
   *
   * NOTES:
   * - Using named exports in packages allows for more flexibility when the
   *   package grows and functionality is added later on. As a result, disable
   *   this rule.
   */
  "import/prefer-default-export": "off",

  /**
   * Limit the maximum number of dependencies a module can have.
   *
   * NOTES:
   * - Some modules use a lot of dependencies, so either increase this to a
   *   larger number, or disable it completely.
   */
  "import/max-dependencies": [
    "error",
    {
      max: 40,
    },
  ],

  /**
   * Forbid unassigned imports.
   *
   * NOTES:
   * - We might need to disable this rule completely, if we find that we
   *   continue to use a larger number of unassigned modules.
   * - Sometimes, we import CSS as modules without assigning them a name. So,
   *   disable this rule completely.
   * - Continue to fill this rule with the patches we use so we don't need to disable
   *   this rule completely.
   */
  "import/no-unassigned-import": [
    "error",
    {
      allow: [
        "core-js/stable",
        "url-search-params-polyfill",
        "beautiful-react-redux/patch",
        "@babel/polyfill",
        "both",
        "polyfills",
        "**/register/**",
        "**/*.{jpeg,jpg,gif,png,ico,css}",
      ],
    },
  ],

  /**
   * Forbid named default exports.
   */
  "import/no-named-default": "off",

  /**
   * Forbid default exports.
   */
  "import/no-default-export": "off",

  /**
   * Forbid named exports.
   */
  "import/no-named-export": "off",

  /**
   * Forbid anonymous values as default exports,
   *
   * - We default export arrays for action-types, so disable that rule.
   * - We default export arrow funcs so disalbe for that (and anon funcs).
   */
  "import/no-anonymous-default-export": [
    "error",
    {
      allowArray: true,
      allowArrowFunction: true,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: true,
    },
  ],

  /**
   * Prefer named exports to be grouped together in a single export
   * declaration.
   *
   * NOTES:
   * - Since we sometimes export functions as we define them throughout a
   *   module, its probably better to disable this rule.
   */
  "import/group-exports": "off",

  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   */
  "import/dynamic-import-chunkname": [
    "error",
    {
      importFunctions: [ "importComponent", "lazy", "React.lazy" ],
      webpackChunknameFormat: "[a-zA-Z0-9-/_]+",
    },
  ],

  /**
   * Ensure imports point to a file/module that can be resolved.
   *
   * NOTES:
   * - Disabled in @typescript-eslint
   * - According to XO, this rule is buggy with TypeScript, so should be disabled.
   */
  "import/no-unresolved": [
    "error",
    {
      commonjs: true,
      amd: false,
    },
  ],

  /**
   * Ensure named imports correspond to a named export in the remote file.
   *
   * NOTE:
   * - Disabled via @typescript-eslint
   * - According to XO, this doesn't work with TypeScript, so should be disabled.
   */
  "import/named": "error",

  /**
   * Ensure a default export is present, given a default import.
   *
   * - Disabled via @typescript-eslint
   * - This causes the parser to do its own parsing and tracking,
   *   so disable this. (recommended by the @typescript-eslint github).
   */
  "import/default": "error",

  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   *
   * - Disabled via @typescript-eslint
   * - This causes the parser to do its own parsing and tracking,
   *   so disable this. (recommended by the @typescript-eslint github).
   */
  "import/namespace": [
    "error",
    {
      // Change to true according to XO plugin.
      allowComputed: true,
    },
  ],

  /**
   * Restrict which files can be imported in a given folder.
   *
   * NOTES:
   * - Since we split the frontend bundles into two (client, server) we could
   *   add zones to prevent importing server bundles from client.
   */
  "import/no-restricted-paths": [
    "off",
    {
      zones: [],
    },
  ],

  /**
   * Forbid import of modules using absolute paths.
   */
  "import/no-absolute-path": [
    "error",
    {
      esmodule: true,
      commonjs: true,
      amd: true,
    },
  ],

  /**
   * Forbid require() calls with expressions.
   *
   * NOTES:
   * - We use dynamic requires for packages, so disable this rule.
   */
  "import/no-dynamic-require": "off",

  /**
   * Prevent importing the submodules of other modules.
   *
   * NOTES:
   * - We often import components from subdirectories, we disable this rule.
   */
  "import/no-internal-modules": [
    "off",
    {
      allow: [],
    },
  ],

  /**
   * Forbid webpack loader syntax in imports.
   */
  "import/no-webpack-loader-syntax": "error",

  /**
   * Forbid a module from importing itself.
   */
  "import/no-self-import": "error",

  /**
   * Forbid a module from importing a module with a dependency path back to
   * itself.
   *
   * NOTES:
   * - Disabled via @typescript-eslint
   * - Enable with Node.js has ES2015 module support.
   * - Disabled according to XO plugin.
   * - Recommended (@typescript-eslint) to only run this at CI/push time to
   *   lessen local performance burden.
   */
  "import/no-cycle": [
    "error",
    {
      maxDepth: Infinity,
    },
  ],

  /**
   * Prevent unnecessary path segments in import and require statements.
   */
  "import/no-useless-path-segments": [
    "error",
    {
      noUselessIndex: true,
    },
  ],

  /**
   * Forbid importing modules from parent directories.
   */
  "import/no-relative-parent-imports": "off",

  /**
   * Report potentially ambiguous parse goal (script vs. module).
   *
   * NOTES:
   * - This gets thrown from our webpack configs, so disable it.
   * - According to XO plugin, enable this when Node.js has ES2015 module
   *   support.
   */
  "import/unambiguous": "off",

  /**
   * Report CommonJS require calls and module.exports or exports.*.
   *
   * NOTES:
   * - According to XO plugin, enable this when Node.js has ES2015 module
   *   support.
   */
  "import/no-commonjs": [
    "off",
    {
      allowRequire: true,
      allowPrimitiveModules: true,
    },
  ],

  /**
   * Report AMD require and define calls.
   */
  "import/no-amd": "error",

  /**
   * No Node.js builtin modules.
   *
   * NOTES:
   * - We might need to disable this rule completely, if we find that we
   *   continue to use a larger number of builtin modules.
   */
  "import/no-nodejs-modules": [
    "error",
    {
      allow: [ "fs", "path", "child_process", "os" ],
    },
  ],

  /**
   * Report any invalid exports, i.e. re-export of the same name.
   */
  "import/export": "error",

  /**
   * Report use of exported name as identifier of default export.
   *
   * This rule doesn't have an equivalent check in TypeScript, so only run
   * them at CI/push time to lessen the local performance burden. (according
   * to @typescript-eslint docs)
   *
   * NOTES:
   * - Disabled via @typescript-eslint
   */
  "import/no-named-as-default": "error",

  /**
   * Report use of exported name as property of default export.
   *
   * NOTES:
   * - This causes the parser to do its own parsing and tracking,
   *   so disable this. (recommended by the @typescript-eslint github).
   * - Disabled via @typescript-eslint
   */
  "import/no-named-as-default-member": "error",

  /**
   * Report imported names marked with @deprecated documentation tag.
   *
   * NOTES:
   * - According to XO plugin, looks useful but is unstable, so disable.
   * - According to @typescript-eslint docs, TypeScript doesn't have an
   *   equivalent check for this, so to lessen local performance burden, this
   *   should only be run at CI/push time.
   * - Disabled via @typescript-eslint.
   */
  "import/no-deprecated": "error",

  /**
   * Forbid the use of extraneous packages.
   *
   * NOTES:
   * - Since we use devDependencies in tests & webpack, we use the glob
   *   patterns to exclude checking modules in those files.
   */
  "import/no-extraneous-dependencies": [
    "error",
    {
      devDependencies: [
        "babel.config.js",
        ".babelrc",
        ".stylelintrc",
        "stylelint.config.js",
        ".eslintrc.js",
        ".eslintrc.*.js",
        ".eslintrc",
        "jest.*.js",
        "webpack/**/*.js",
        "webpack.*.js",
        "webpack.config.js",
        "webpack.config.dev.js",
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.test.js",
        "**/*.test.jsx",
        "__tests__/**/*.ts",
        "__tests__/**/*.tsx",
        "__tests__/**/*.js",
        "__tests__/**/*.jsx",
        "tests/**/*.ts",
        "tests/**/*.tsx",
        "tests/**/*.js",
        "tests/**/*.jsx",
      ],
    },
  ],

  /**
   * Forbid the use of mutable exports with var or let.
   */
  "import/no-mutable-exports": "error",

  /**
   * Report modules without exports, or exports without matching import in
   * another module.
   *
   * - This rule does not have an equivalent check in TypeScript, so
   *   (@typescript-eslint) recommends only running this check at CI/push time
   *   to lessen the local performance burden.
   * - Disabled via @typescript-eslint.
   */
  "import/no-unused-modules": [
    "error",
    {
      unusedExports: true,
      /*
       * Patches because will throw annoying errors in entry points and config
       * files and there isn't an option to ignore those files here..
       */
      missingExports: false,
      src: [],
      ignoreExports: [
        "webpack.config.js",
        "webpack.config.dev.js",
        "webpack.config.development.js",
        "webpack.config.prod.js",
        "webpack.config.production.js",
        "webpack.config.stage.js",
        "webpack.config.staging.js",
        "jest.config.js",
        "jest.setup.js",
        "jest.assetTransformer.js",
        "babel.config.js",
      ]
    },
  ],
}
