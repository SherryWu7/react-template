const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const webpackConfig = {
  entry: {
    app: "./src/index.jsx",
  },
  output: {
    filename: "assets/js/[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    // publicPath: "static",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      VERSION_ENV: process.env.VERSION_ENV,
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        //复制static到dist
        from: path.resolve(__dirname, "../src/static"), //打包的静态资源目录地址
        // to: "./static", //打包到dist下面的static
        to: path.resolve(__dirname, "../dist/static"),
      },
    ]),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};

module.exports = webpackConfig;
