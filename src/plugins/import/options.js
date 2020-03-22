const nodeBuiltins = [
  "assert",
  "buffer",
  "child_process",
  "cluster",
  "console",
  "constants",
  "crypto",
  "dgram",
  "dns",
  "domain",
  "events",
  "fs",
  "https",
  "module",
  "net",
  "os",
  "path",
  "punycode",
  "querystring",
  "readline",
  "repl",
  "stream",
  "string_decoder",
  "sys",
  "timers",
  "tls",
  "tty",
  "url",
  "util",
  "vm",
  "zlib",
  "freelist",
  "v8",
  "process",
  "async_hooks",
  "http2",
  "perf_hooks",
]

module.exports = {
  env: {
    es6: true,
  },
  settings: {
    /**
     * If we end up using eslint_d or eslint-loader (long-lasting processes) we should
     * adjust the lifetime value to something specific (in seconds) to automatically
     * expire import cache.
     */
    "import/cache": {
      lifetime: Infinity
    },
    "import/internal-regex": "^packages/",
    "import/core-modules": [
      "electron",
      /**
       * If we don't specify these here, eslint will report errors when we try to use
       * any builtins modules.
       */
      ...nodeBuiltins,
    ],
    "import/external-module-folders": [
      "node_modules",
      ".yalc",
    ],
    "import/resolver": {
      node: {
        extensions: [ ".js", ".jsx", ".json" ]
      },
    }
  }
}
