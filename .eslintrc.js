module.exports = {
  root: true,
  plugins: ["@typescript-eslint", "jest"],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "prettier/@typescript-eslint",
    "plugin:jest/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
};
