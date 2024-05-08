const path = require("path");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/",
  devServer: {
    allowedHosts: "all", // tambahan baru
    client: {
      overlay: {
        errors: false,
        warnings: false,
        runtimeErrors: false,
      },
    },
  },
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@axios": path.resolve(__dirname, "src/libs/axios"),
      },
    },
  },
});
