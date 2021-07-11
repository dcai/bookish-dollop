
module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    commonjs: true,
    jest: true,
    es6: true,
    node: true,
    browser: true,
  },
  extends: ["react-app", "react-app/jest", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "no-undef": "error",
    "no-unused-vars": "warn",
    "no-console": "off",
  },
};
