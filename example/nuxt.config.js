const { resolve } = require('path')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modern: isDev ? false : 'client',
  modules: [
    { handler: require('../') }
  ]
}
