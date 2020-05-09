const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

const webpackConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), //开发服务运行时的文件根目录
    hot: true,
    open: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: (loader) => [
                require("postcss-import")({ root: loader.resourcePath }),
                require("autoprefixer")({
                  overrideBrowserslist: "last 5 version",
                }),
              ],
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
        // exclude: /node_modules/,
        include: [resolve("src/components"), resolve("src/views/")],
      },
      {
        test: /\.(css|less)$/, // 针对 antd 的 按需加载 (antd的样式不能开启css modules)
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: false,
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
        // include: /node_modules/,
        exclude: [resolve("src/components"), resolve("src/views/")],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = merge(baseWebpackConfig, webpackConfig);
