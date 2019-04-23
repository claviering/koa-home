const path = require('path')
const logger = require('./log')
const mongo = require('./mongo')
const session = require('./session')
// 连接 redis 数据库测试
const { client } = require(path.resolve('./app/middleware/redis'))

module.exports = (app) => {
  // 静态资源
  app.use(require('koa-static')(path.resolve('./app/public')));
  // 连接 mongodb
  mongo()
  // session 中间件
  session(app)
  //记录日志
  app.use(logger)
};
