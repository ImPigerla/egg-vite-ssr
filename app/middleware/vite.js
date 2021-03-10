const { createServer } = require('vite');

module.exports = async (ctx, next) => {
  const { app } = ctx;

  console.log(777, app.viteServer);

  if (!app.viteServer) {
    app.viteServer = await (await createServer({})).listen();
  }

  await next();
};
