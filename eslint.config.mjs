import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "script",
            globals: {
                // Manual browser globals as we don't have 'globals' package installed locally
                window: "readonly",
                document: "readonly",
                navigator: "readonly",
                console: "readonly",
                setTimeout: "readonly",
                setInterval: "readonly",
                requestAnimationFrame: "readonly",
                IntersectionObserver: "readonly",
                fetch: "readonly",
                localStorage: "readonly",
                location: "readonly"
            }
        },
        rules: {
            "indent": ["error", 4],
            "quotes": ["error", "single"],
            "semi": ["error", "always"],
            "no-unused-vars": "warn",
            "no-console": "off"
        }
    }
];
