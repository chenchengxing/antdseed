var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: {
    'index': './js/index',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'js'),
        ],
        loader: 'babel-loader',
        // the loader which should be applied, it'll be resolve relative to the context
        // -loader suffix is no longer optional in Webpack 2 for clarity reasons
        // see webpack 1 upgrade guide

        options: {
          'presets': [
            'es2015',
            'stage-1',
            'babel-preset-react',
          ],
          'plugins': [['import', { "libraryName": "antd" , "style": "css" }]]
        },
      }, 
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'components'),
        ],
        loader: ['style-loader', 'css-loader'],
      }, 
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, 'site'),
          path.resolve(__dirname, 'components'),
        ],
        loader: ['style-loader', 'css-loader', 'less-loader'],
      }, 
      {
        test: /\.woff(\?.+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?.+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?.+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?.+)?$/, loader: "file-loader"
      }, {
        test: /\.svg(\?.+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      }
    ]
  },
  resolve: {
    alias: {
      // 'utils': path.resolve(__dirname, './utils'),
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 9000,
    watchOptions: {
      poll: true
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
    })
  ]
}