
module.exports = {
  "$schema": "http://json.schemastore.org/prettierrc",
  arrowParens: "always",
  printWidth: 88,
  useTabs: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  overrides: [
    {
      files: ["*.yaml", "*.yml"],
      options: {
        singleQuote: false,
      },
    },
  ],
};
