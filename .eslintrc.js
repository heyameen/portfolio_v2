module.exports = {
  extends: ["next/core-web-vitals", "airbnb", "prettier"],
  plugins: ["react", "@typescript-eslint", "prettier"],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "consistent-return": "off",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "react/jsx-filename-extension": "off",
    // "react/function-component-definition": [
    //   "error",
    //   {
    //     namedComponents: "arrow-function",
    //     unnamedComponents: "arrow-function",
    //   },
    // ],
    "react/function-component-definition": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        controlComponents: [],
        assert: "either",
        depth: 3,
      },
    ],
  },
};
