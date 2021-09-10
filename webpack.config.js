// node 의 기본 모듈
const path = require('path');

module.exports = {
    devServer: {
        // 404 error -> index.html 로 리다이렉트
        historyApiFallback: true
    },
    entry : {
        router: './src/core/Router.js',
        main : './src/app.js'
    },
    output: {
       path : path.resolve('./dist'),
       filename : '[name].js'
    }
}
