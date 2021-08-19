module.exports = {
    extends: "eslint:recommended",
    rules: {
        "indent": "off", // 缩进
        "no-extra-semi": "error", // 多余的冒号
        "no-multi-spaces": "error", // 多余的空格
        "no-trailing-spaces": "off", // 一行结束后不要有空格
        "no-multiple-empty-lines": 0, // 最多空行
        "comma-spacing": ["error", { "before": false, "after": true }], // 逗号后面和前面的空格，前面不允许有，后面可以有一个或多个
        "space-before-function-paren": ["error", "never"], // function关键字与开始参数之间不允许有空格
        "comma-dangle": 'off', // 强制在对象和数组文字中一致地不使用尾随逗号
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }], // 冒号
        // "no-unused-vars": ["error", { "args": "none" }]
        "no-unused-vars": "off",
        "no-debugger": "off",
        "no-irregular-whitespace": "off",
        "no-constant-condition": "off"
    }
}