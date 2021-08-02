const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

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
      filename: 'manifest.webmanifest',
      name: 'Petgram - Your pet photo app',
      shortname: 'Petgram 🐶',
      description: 'Petgram lets you find pretty pet photos',
      background_color: '#fff',
      theme_color: '#b1a',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      prefer_related_applications: true,
      icons: [{
        src: path.resolve('src/assets/icon.png'),
        size: '1024x1024',
        sizes: [96, 128, 144, 192, 256, 384, 512],
        purpose: 'maskable any',
        destination: path.join('Icons'),
        ios: true
      }]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: 'service-worker.js',
      runtimeCaching: [{
        urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplsh.com)'),
        handler: 'CacheFirst',
        options: {
          cacheName: 'images'
        }
      }, {
        urlPattern: new RegExp('https://petgram-server-mineitoshio.vercel.app'),
        handler: 'NetworkFirst',
        options: {
          cacheName: 'api'
        }
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
