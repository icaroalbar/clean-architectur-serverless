import path from "path";
import slsw from "serverless-webpack";
import nodeExternals from "webpack-node-externals";

module.exports = {
  context: __dirname,
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  devtool: slsw.lib.webpack.isLocal
    ? "eval-cheap-module-source-map"
    : "source-map",
  resolve: {
    extensions: [".mjs", ".json", ".ts", ".js"],
    symlinks: false,
    cacheWithContext: false,
    alias: {
      "@modules": path.resolve(__dirname, "src/modules"),
      "@infra": path.resolve(__dirname, "src/infra"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
  optimization: {
    minimize: false,
    concatenateModules: false,
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [
          [
            path.resolve(__dirname, "node_modules"),
            path.resolve(__dirname, ".serverless"),
            path.resolve(__dirname, ".webpack"),
            path.resolve(__dirname, "coverage"),
            path.resolve(__dirname, "__tests__"),
          ],
        ],
      },
    ],
  },
};
