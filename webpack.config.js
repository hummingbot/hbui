const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function webpackConfig(env, args) {
  return {
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
      filename: 'main.js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/'
    },
    resolve: { extensions: ['.tsx', '.js'] },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          loader: require.resolve('babel-loader'),
          // See .babelrc for further babel config
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    optimization: {
      minimizer: [
        // Omit creation of .txt files
        new (require('terser-webpack-plugin'))({ extractComments: false }),
      ],
    },
    devServer: {
      hot: true,
      open: true,
      historyApiFallback: true,
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: 'static' }
        ]
      })
    ]
  }
}
