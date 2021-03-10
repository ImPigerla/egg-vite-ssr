// app/controller/home.js
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
    ctx.body = await ctx.renderReactString(ctx);
  }
}

module.exports = HomeController;
