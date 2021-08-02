module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:prettier/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: [2, "double"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
}
