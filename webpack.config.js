const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs')
  },
  
  module: {
    rules: [
    
      {
      test: /\.pug$/,
      use: ['pug-loader?pretty=true']
      },

  {
      test: /\.(sass|scss)$/,
      use: [
      {
        loader: MiniCssExtractPlugin.loader, 
      }, 
          'css-loader',
          'sass-loader'
          ] 
      },

    {
        test: /\.(png|jpg|svg|tiff|gif)$/,
        use: ['file-loader'],
    },

    {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: ['file-loader']
    }

    ]
  },

devServer: {
  port: 4200,
  open: true
},

plugins: [
  new HtmlWebpackPlugin({
    template: './pages/starting-page/starting-page.pug',
    filename: 'index.html' 
  }),

new HtmlWebpackPlugin({
    template: './pages/landing-page/landing-page.pug',
    filename: 'landing-page.html' 
  }),

new HtmlWebpackPlugin({
    template: './pages/ui-kit-cards/ui-kit-cards.pug',
    filename: 'ui-kit-cards.html' 
  }),

  new HtmlWebpackPlugin({
    template: './pages/ui-kit-colors-type/ui-kit-colors-type.pug',
    filename: 'ui-kit-colors-type.html' 
  }),

  new HtmlWebpackPlugin({
    template: './pages/ui-kit-headers-footers/ui-kit-headers-footers.pug',
    filename: 'ui-kit-headers-footers.html' 
  }),

  new HtmlWebpackPlugin({
    template: './pages/ui-kit-form-elements/ui-kit-form-elements.pug',
    filename: 'ui-kit-form-elements.html' 
  }),

    new CopyWebpackPlugin({
  patterns: [
    {
    from: path.resolve(__dirname, 'src/assets/img/pug'),
    to: path.resolve(__dirname, 'docs')
    }
      ]
  }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
  })  

  ]
}

