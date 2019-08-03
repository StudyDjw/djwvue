//为了使用vue组件
const VueLoaderPlugin = require('vue-loader/lib/plugin');


//配置文件


var path = require('path')

var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //入口
    entry: path.join(__dirname, './src/main.js'),
    //出口
    output: {
        path: path.join(__dirname, './src/dist'),
        filename: "bundle.js"
    },
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(jpg|png|gif|jpeg)$/, use: ['url-loader?limit=2000&name=[hash:8]-[name].[ext]']},
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'}, //处理字体文件的配置项
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            { test:/\.vue$/,use:'vue-loader'}, //解析 vue文件的配置
            { test:/vue-preview.src.*?js$/,loader:'babel'} //使用vue-cli 需要配置
        ]
    }
    // resolve: {
    //     //设置vue导入时候的路径
    //     alias: {
    //         'vue$': 'vue/dist/vue.js'
    //     }
    // }
}