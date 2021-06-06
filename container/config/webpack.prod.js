const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies, // to load only one copy for all modules in browser
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
