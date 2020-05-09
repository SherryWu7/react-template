require("../color");

const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const devWebpackConf = require("./webpack.dev.conf");

// 注意：webpack配置中的devSever配置项只对在命令行模式有效
const compiler = webpack(devWebpackConf);
const server = new webpackDevServer(compiler, {
  // contentBase: path.resolve(__dirname, "dist"), //开发服务运行时的文件根目录
  hot: true,
  open: true,
});
server.listen(3000);
