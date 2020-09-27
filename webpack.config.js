const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const history = require('connect-history-api-fallback')
const convert = require('koa-connect')

const dev = Boolean(process.env.WEBPACK_SERVE)

module.exports = {
    entry: './src/index.js',
    mode:  'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
    	historyApiFallback: true, 
	},
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(eot|ttf|woff|woff2)(\?.+)?$/,
                use: [
                  {
                    loader: 'url-loader'
                  }
                ]
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          chunksSortMode: 'none'
        })
      ]
};
if (dev) {
    module.exports.serve = {
      port: 8080,
      add: app => {
        app.use(convert(history()))
      }
    }
  }