const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require("html-webpack-plugin")
const mode = process.env.MODE === "prod"? 'production':"development"
module.exports = {
    entry:{
        main: "./src/index.js"
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new htmlWebpackPlugin({title:'portafolio',template:"./src/index.html"})
    ],
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,'docs'),
        clean:true
    },
    resolve:{
        extensions: [".js", ".jsx"]
    },
    mode,
    module:{
        rules:[
            {
                test:/\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                exclude: "/node_modules/",
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                // More information here https://webpack.js.org/guides/asset-modules/
                type: "asset",
            },
            {
                test: /\.jsx?$/,
                exclude:"/node_modules/",
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    },
    devtool:"source-map",
    devServer:{
        contentBase:"./docs",
        hot:true
    }
}