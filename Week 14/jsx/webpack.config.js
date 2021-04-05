/*
 * @Descripttion: 
 * @Author: zhouqin
 * @Date: 2021-03-30 20:32:15
 * @LastEditors: zhouqin
 * @LastEditTime: 2021-03-31 21:20:37
 */

module.exports = {
  entry: './main.js',
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'createElement'}]]
        }
      }
    }]
  }
}
