'use strict';

const Controller = require('egg').Controller;

class AdminLoginController extends Controller {
  async index() {
    const { ctx } = this;
    const user = await ctx.service.admin.login.find();
    ctx.body = user;
  }
}

module.exports = AdminLoginController;
