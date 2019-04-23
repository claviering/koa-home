const defaultRouter = require('./default');

module.exports = (app) => {
  app.use(defaultRouter.routes()).use(defaultRouter.allowedMethods())
};