const webpack = require("webpack");
const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.conf");

const webpackConfig = {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
      }),
      new OptimizeCssAssetsPlugin({}),
      // gzip 压缩文件
      // new CompressionWebpackPlugin({
      //   filename: "[path].gz[query]",
      //   algorithm: "gzip",
      //   test: /\.(js|css)$/,
      //   threshold: 10240,
      //   minRatio: 0.8,
      // }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   // you can specify a publicPath here
            //   // by default it uses publicPath in webpackOptions.output
            //   publicPath: "../",
            // },
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
                // sourceMap: false
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
        exclude: /node_modules/,
        // include: [resolve("src/components"), resolve("src/views/")],
      },
      {
        test: /\.(css|less)$/, // 针对 antd 的 按需加载 (antd的样式不能开启css modules)
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   // you can specify a publicPath here
            //   // by default it uses publicPath in webpackOptions.output
            //   publicPath: "../",
            // },
          },
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
        include: /node_modules/,
        // exclude: [resolve("src/components"), resolve("src/views/")],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[contenthash:8].css",
      // chunkFilename: "assets/[id].css",
    }),
  ],
};

module.exports = merge(baseWebpackConfig, webpackConfig);
