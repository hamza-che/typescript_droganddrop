const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3010,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: [ "style-loader", "css-loader" ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Project Manager",
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
  resolve: {
    extensions: [ ".ts", ".js" ],
  },
};
