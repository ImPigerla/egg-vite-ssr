const fs = require('fs');
const path = require('path');
// const vite = require('vite');
// let vite = null;

const resolve = p => path.resolve(__dirname, p);

const renderReactString = async ctx => {
  const {
    app: { config }
  } = ctx;
  console.log(1111, ctx.app.baseDir);
  let template, render;
  const root = ctx.app.baseDir;
  const url = ctx.originalUrl;
  const isProd = config.env === 'prod';
  const vite = ctx.app.viteServer;
  // if (!vite) {
  //   console.log(2223);
  //   vite = await require('vite').createServer({
  //     root,
  //     logLevel: isProd ? 'info' : 'error',
  //     server: {
  //       middlewareMode: true
  //     }
  //   });
  // }

  // vite = await require('vite');
  if (!isProd) {
    // always read fresh template in dev
    template = fs.readFileSync(resolve(`${ctx.app.baseDir}/index.html`), 'utf-8');
    template = await vite.transformIndexHtml(url, template);
    render = (await vite.ssrLoadModule(`${ctx.app.baseDir}/src/entry-server.jsx`)).render;
  } else {
    template = indexProd;
    render = require(`${ctx.app.baseDir}/dist/server/entry-server.js`).render;
  }

  const context = {};
  const appHtml = render(url, context);

  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    return ctx.redirect(301, context.url);
  }

  let html = template.replace(`<!--app-html-->`, appHtml);
  html = html.replace(/\/\@/g, 'http://localhost:3000/@');
  // html = html.replace('<!--script-html-->', '<script type="module" src="http://localhost:3000/main.js"></script>');
  return html;
};

module.exports = {
  renderReactString
};
