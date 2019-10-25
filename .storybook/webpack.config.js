const path = require('path');
// your app's webpack.config.js
const custom = require('../webpack.config.babel.js');

module.exports = async ({ config, mode }) => {
  return { ...config, watchOptions: custom.watchOptions };
};
