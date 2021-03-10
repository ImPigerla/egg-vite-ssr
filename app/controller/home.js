// app/controller/home.js
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
    const renderData = {
      serverText: 'title text'
    };

    // ctx.body = await ctx.renderReactString(ctx);
    await ctx.vite.render('index.html', renderData);
  }
}

module.exports = HomeController;
