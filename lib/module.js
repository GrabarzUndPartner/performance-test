const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['perfomance-test'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'perfomance-test.js',
    options
  })
}

module.exports.meta = require('../package.json')
