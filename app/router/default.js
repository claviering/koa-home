const path = require('path')
const defaultCtrl = require(path.resolve('./app/controller/default.js'))
const Router = require('koa-router')
router = new Router()

router.get('/', defaultCtrl.default)

module.exports = router