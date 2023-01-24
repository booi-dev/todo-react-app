module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'react-app',
        'airbnb',
        'airbnb/hooks',
        'prettier',
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'semi': 'warn',
        'react/react-in-jsx-scope': 'off',
        'func-names': 'off',
        'react-hooks/exhaustive-deps': 'off',
        "react/prop-types": "off",
        "no-unused-expressions": "off"
    },
    "required": {
        "some": ["nesting", "id"]
    }
};
