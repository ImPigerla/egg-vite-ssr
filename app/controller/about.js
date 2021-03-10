// app/controller/home.js
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
    const renderData = {
      serverText: '123123123'
    };
    await ctx.vite.render('index.html', renderData);
  }
}

module.exports = HomeController;
