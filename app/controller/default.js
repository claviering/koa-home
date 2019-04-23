module.exports = {
  default: (ctx, next) => {
    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
    ctx.body = 'Hello world ' + n + ' views'
  }
};
