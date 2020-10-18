module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:prettier/recommended", "prettier/react"],
  plugins: ["react", "prettier"],
  rules: {
    semi: 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "prettier/prettier": [
      "error",
      {
        semi: true,
      },
    ],
  },
  ignorePatterns: ["node_modules", "build/*", "src/serviceWorker.js"],
};
