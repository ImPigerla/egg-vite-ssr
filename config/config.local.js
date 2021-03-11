const path = require('path');

module.exports = function (app) {
  const exports = {};
  exports.vitePlugin = {
    devServer: true
  };

  return exports;
};
