const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.ts",
  output: {
    filename: "bundle[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "[name][ext]",
    clean: true,
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
