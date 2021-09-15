// node 의 기본 모듈
const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    devServer: {
        // 404 error -> index.html 로 리다이렉트
        historyApiFallback: true
    },
    entry : {
        // router: './src/core/Router.js',
        main : './src/main.js'
    },
    output: {
       path : path.resolve('./dist'),
       // filename : '[name].js'
       filename : 'bundle.js'
    },
    // node_modules 의 모듈들을 인식할 수 있음
    // extensions 에 입력된 확장자의 경우 webpack 에서 인식해주기 때문에 입력하지 않아도 됨
    resolve: {
        modules: ['./node_modules'],
        extensions: ['.js', '.css'],
    }
}
