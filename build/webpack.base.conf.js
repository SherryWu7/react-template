const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const webpackConfig = {
  entry: {
    app: "./src/index.jsx",
  },
  output: {
    filename: "[name].bundle.js",
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
              // config: {
              //   path: "../postcss.config.js",
              // },
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
                // modifyVars: theme,
              },
            },
          },
        ],
        include: /node_modules/,
      },
    ],
  },
  plugins: [
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
