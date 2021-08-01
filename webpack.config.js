const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Your pet photo app',
      shortname: 'Petgram 🐶',
      description: 'Petgram lets you find pretty pet photos',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [{
        src: path.resolve('src/assets/icon.png'),
        sizes: [96, 128, 192, 256, 384, 512],
        purpose: 'maskable'
      }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-syntax-dynamic-import'
            ]
          }
        }
      }
    ]
  }
}
