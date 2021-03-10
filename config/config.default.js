const path = require('path');

module.exports = function (app) {
  const exports = {};
  exports.keys = '123456';

  exports.static = {
    prefix: '/',
    dir: app.baseDir
  };

  return exports;
};
