const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const mode = process.env.MODE === "prod"? 'production':"development"
module.exports = {
    entry:{
        main: "./src/index.js"
    },
    plugins:[
        new MiniCssExtractPlugin()
    ],
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,'dist'),
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
        contentBase:"./dist",
        hot:true
    }
}