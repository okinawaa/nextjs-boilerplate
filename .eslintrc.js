module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["airbnb", "prettier"],
  plugins: ["json-format", "simple-import-sort"],
  rules: {
    // custom
    "react/function-component-definition": 0,
    "react/react-in-jsx-scope": 0,
    "import/no-unresolved": 0,
    "react/jsx-props-no-spreading": 0,
    "import/extensions": 0,

    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] }
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: []
      }
    ]
  },
  ignorePatterns: ["**/__generated__/**/*", "**/lib/**/*", "**/dist/**/*"]
};
