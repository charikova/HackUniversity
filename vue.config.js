var CopyWebpackPlugin = require("copy-webpack-plugin");
var path = require("path");

var vueConfig = {
  outputDir: "www",
  assetsDir: "static",
  lintOnSave: false,
  transpileDependencies: [
    "framework7",
    "framework7-vue",
    "dom7",
    "ssr-window",
    "template7"
  ],
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].template = path.resolve(__dirname, "./index.html");
      return args;
    });
  },
  configureWebpack: () => ({
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, "static"),
          to: path.resolve(__dirname, vueConfig.outputDir, vueConfig.assetsDir),
          ignore: [".*"]
        }
      ])
    ]
  })
};

module.exports = vueConfig;
