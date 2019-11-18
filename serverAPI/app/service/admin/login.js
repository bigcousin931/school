// app/service/user.js

'use strict';

const Service = require('egg').Service;

class AdminLoginService extends Service {
  async find() {
    // "users" 为test数据库数据表名
    console.log(this.app)
    const user = await this.app.mysql.query('select * from user', '');
    return { user };
  }
}

module.exports = AdminLoginService;
