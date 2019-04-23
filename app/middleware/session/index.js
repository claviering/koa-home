
const path = require('path');
const session = require('koa-session');
const config = require(path.resolve('./app/config'));

module.exports = (app) => {
  app.keys = ['newest secret key', 'older secret key'];
  app.use(session(config, app))
}
