module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
  },
  "rules": {
    "react/jsx-filename-extension": "off",
    "no-underscore-dangle": ["error", { "allow": ["_test"] }],
    "no-prototype-builtins": "off",
    "react/forbid-prop-types": "off",
    "react/prefer-stateless-function": "off",
  }
};
