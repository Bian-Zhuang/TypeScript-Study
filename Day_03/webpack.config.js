// 引入一个包
const path = require("path");
// 引入html插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 引入clean插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// webpack中的所有配置信息都应该写在 module.exports 中
module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",

  // 指定打包输出目录
  output: {
    path: path.resolve(__dirname, "dist"),
    // 打包后的文件名字
    filename: "bundle.js",
    // 不用箭头函数
    environment:{
      arrowFunction: false
    }
  },

  // 指定webpack打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        test: /\.ts$/,
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义环境
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      chrome: "85",
                      ie: '11'
                    },
                    // 指定corejs版本
                    corejs: "3",
                    // 使用corejs方式 usage 按需加载
                    "useBuiltIns": 'usage'
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        exclude: /node-modules/,
      },
    ],
  },
  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  // 用来设置引入模块
  resolve: {
    extensions: [".ts", ".js"],
  },
};
