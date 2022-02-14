const path = require('path');

const webpackConfig = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      ajax: path.resolve(__dirname, `src/config/axios.js`),
    },
  },
};

module.exports = {
  devServer: {
    // proxy: 'http://txy8g.songboy.site:8010/',
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  configureWebpack: webpackConfig,
};
