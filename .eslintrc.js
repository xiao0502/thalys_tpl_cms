/*
 * @Author: 肖锦
 * @Date: 2021-03-09 15:29:49
 * @LastEditTime: 2021-03-16 09:28:35
 * @Description: file content
 * @LastEditors: 肖锦
 */
module.exports = {
    root: true,
    extends: ['plugin:vue/essential', '@vue/standard'],
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-parsing-error': [
            4,
            {
                'x-invalid-end-tag': false
            }
        ],
        'no-undef': 'off',
        'space-before-function-paren': 0,
        camelcase: 'off',
        'template-curly-spacing': 'off',
        indent: 'off',
        semi: [0],
        'comma-dangle': [0, 'always-multiline'],
        'vue/script-indent': [
            '',
            4,
            {
                baseIndent: 1,
                switchCase: 1
            }
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
