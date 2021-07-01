// node 의 기본 모듈
const path = require('path');

module.exports = {
    entry : {
        main : './src/app.js'
    },
    output: {
       path : path.resolve('./dist'),
       filename : '[name].js'
    }
}
