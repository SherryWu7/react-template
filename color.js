/**
 * antd 在线换肤
 * https://github.com/mzohaibqc/antd-theme-generator
 * https://www.jianshu.com/p/b635211658c8
 */

const path = require("path");
const { generateTheme } = require("antd-theme-generator");

const options = {
  antDir: path.join(__dirname, "./node_modules/antd"),
  stylesDir: path.join(__dirname, "./src/styles"),
  varFile: path.join(__dirname, "./src/assets/styles/vars.less"),
  mainLessFile: path.join(__dirname, "./src/assets/styles/main.less"),
  themeVariables: ["@primary-color", "@text-color"],
  indexFileName: "index.html",
  outputFilePath: path.join(__dirname, "./src/static/color.less"),
};

generateTheme(options)
  .then((less) => {
    console.log("Theme generated successfully");
  })
  .catch((error) => {
    console.log("Error", error);
  });
