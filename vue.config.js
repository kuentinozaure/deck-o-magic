const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Deck-o-Magic',
    themeColor: '#311b92',
    msTileColor: '#222',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options...
    }
  }
})
