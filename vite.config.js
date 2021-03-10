const reactRefresh = require('@vitejs/plugin-react-refresh');

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react';`
  },
  build: {
    minify: false
    // 在 outDir 中生成 manifest.json
    // manifest: true
    // rollupOptions: {
    //   // 覆盖默认的 .html 入口
    //   input: './main.js'
    // }
  }
};
