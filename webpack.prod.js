const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimizer: [
      `...`, // keep JS minimizer (Terser)
      new CssMinimizerPlugin(), // minimize CSS
    ],
  },
});
