module.exports = {
  extends: ["stylelint-prettier/recommended"],
  plugins: ["stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "color-no-invalid-hex": null,
    // 'no-extra-semicolons': true // test conflicts with prettier
  },
};
