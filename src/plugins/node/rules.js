/**
 * https://github.com/mysticatea/eslint-plugin-node
 */

module.exports = {
  /**
   * ensure Node.js-style error-first callback pattern is followed
   */
  "node/no-callback-literal": "error",

  /**
   * disallow the assignment to exports
   */
  "node/no-exports-assign": "error",

  /**
   * disallow import declarations which import extraneous modules
   * disallow require() expressions which import extraneous modules
   *
   * NOTES:
   * - Disabled via Import plugin.
   */
  "node/no-extraneous-import": [
    "error",
    {
      allowModules: [],
      resolvePaths: [],
      tryExtensions: [".js", ".jsx", ".json"],
    },
  ],
  "node/no-extraneous-require": [
    "error",
    {
      allowModules: [],
      resolvePaths: [],
      tryExtensions: [".js", ".jsx", ".json"],
    },
  ],

  /**
   * disallow import declarations which import non-existence modules
   * disallow require() expressions which import non-existence modules
   *
   * NOTES:
   * - Disabled via Import plugin.
   */
  "node/no-missing-import": [
    "error",
    {
      allowModules: [],
      resolvePaths: [],
      tryExtensions: [".js", ".jsx", ".json"],
    },
  ],
  "node/no-missing-require": [
    "error",
    {
      allowModules: [],
      resolvePaths: [],
      tryExtensions: [".js", ".jsx", ".json"],
    },
  ],

  /**
   * disallow bin files that npm ignores
   * disallow import declarations which import private modules
   * disallow require() expressions which import private modules
   */
  "node/no-unpublished-bin": "error",

  /**
   * Disabled because too annoying.
   * See: https://github.com/mysticatea/eslint-plugin-node/issues/156
   */
  "node/no-unpublished-import": "off",
  "node/no-unpublished-require": "off",

  /**
   * disallow unsupported ECMAScript built-ins on the specified version
   * disallow unsupported ECMAScript syntax on the specified version.
   * disallow unsupported Node.js built-in APIs on the specified version
   *
   * NOTE:
   * - Enable after we add compiled sources to ignores.
   */
  "node/no-unsupported-features/es-builtins": [
    "off",
    {
      /*
       *  This option is read from the package.json, but can be overwritten here.
       * version: ">=8.0.0",
       *  List of items to omit from this rule. This rule only accepts an array
       *  of specific strings. See URL for that list.
       */
      ignores: [],
    },
  ],
  "node/no-unsupported-features/es-syntax": [
    "off",
    {
      /*
       *  This option is read from the package.json, but can be overwritten here.
       * version: ">=8.0.0",
       *  List of items to omit from this rule. This rule only accepts an array
       *  of specific strings. See URL for that list.
       */
      ignores: [],
    },
  ],
  "node/no-unsupported-features/node-builtins": [
    "off",
    {
      // This option is read from the package.json, but can be overwritten here.
      version: ">=8.0.0",
      /*
       * List of items to omit from this rule. This rule only accepts an array
       * of specific strings. See URL for that list.
       */
      ignores: [],
    },
  ],

  /**
   * make process.exit() expressions the same code path as throw
   */
  "node/process-exit-as-throw": "error",

  /**
   * suggest correct usage of shebang
   * (Fixable)
   *
   * NOTE:
   * - Disabled as the rule doesn't exclude scripts executed with 'node' but
   *   not referenced in 'bin'.
   *   (see: https://github.com/mysticatea/eslint-plugin-node/issues/96)
   */
  "node/shebang": [
    "off",
    {
      /*
       * Perhaps, the file path to source is never handled as a bin file. This
       * option tells the rule it needs to convert these file paths.
       */
      convertPath: {},
    },
  ],

  /**
   * Disallow the use of deprecated node APIs
   */
  "node/no-deprecated-api": [
    "error",
    {
      /*
       *  This rule reads from the 'engines' field in package.json, but can be
       *  overridden here.
       */
      ignoreModuleItems: [],
      ignoreGlobalItems: [],
    },
  ],

  /**
   * This rule enforces the export style.
   *
   * NOTE:
   * - According to XO plugin, disable because it causes too much churn and
   *   will be relatively useless when switching to ES2015 modules.
   */
  "node/exports-style": [
    "off",
    "module.exports",
    {
      // If true, allows module.exports = exports = obj
      allowBatchAssign: false,
    },
  ],

  /**
   * Enforce the style of file extensions in import declarations
   */
  "node/file-extension-in-import": [
    "error",
    "never",
    {
      tryExtensions: [".ts", ".tsx", ".js", ".jsx"],
      ".json": "always",
      ".css": "always",
      ".ico": "always",
      ".svg": "always",
      ".png": "always",
      ".jpg": "always",
      ".gif": "always",
      ".ttf": "always",
      ".otf": "always",
      // ".<ext>": "always" or "never" to override for specific extensions.
    },
  ],

  /**
   * Prefer either the global or required version of modules.
   */
  "node/prefer-global/buffer": ["error", "always"],
  "node/prefer-global/console": ["error", "always"],
  "node/prefer-global/process": ["error", "always"],
  "node/prefer-global/text-decoder": ["error", "always"],
  "node/prefer-global/text-encoder": ["error", "always"],
  /*
   * We usually use a polyfill (via require) for this, so we might want to use
   * either 'never' or 'off' for this rule.
   */
  "node/prefer-global/url-search-params": ["error", "always"],
  "node/prefer-global/url": ["error", "always"],

  /**
   * Disallows callback API in favor of promise API.
   */
  "node/prefer-promises/dns": "error",
  "node/prefer-promises/fs": "error",
}
