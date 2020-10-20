module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:prettier/recommended", "prettier/react"],
  plugins: ["react", "prettier"],
  rules: {
    semi: 0,
    "import/prefer-default-export": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "init-declarations": 0,
    "prettier/prettier": [
      "error",
      {
        semi: true,
      },
    ],
    "import/no-unresolved": 0,
  },
  ignorePatterns: ["node_modules", "build/*", "src/serviceWorker.js"],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
};
