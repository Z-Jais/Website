const { defineConfig } = require('@vue/cli-service')
const JavaScriptObfuscator = require('webpack-obfuscator')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new JavaScriptObfuscator({
        rotateUnicodeArray: true,
      }, ['excluded_bundle_name.js']),
    ],
  }
})
