const ip = require('ip')
const fs = require('fs')
const path = require('path');
const log4js = require('log4js')
const log = log4js.getLogger("koa")
const config = require(path.resolve('./app/config/log4js.config.js'))
log4js.configure(config)

const baseInfo = {
  appLogLevel: 'debug',
  dir: 'logs',
  env: 'dev',
  projectName: 'demo',
  serverIp: ip.address()
}

// 创建日志目录
if (!fs.existsSync(path.resolve(baseInfo.dir))) {
  fs.mkdirSync(baseInfo.dir)
}

module.exports = async (ctx, next) => {
  const start = Date.now()
  // 日志输出信息
  const { method, url, path, query, host, protocol, ip } = ctx
  const client = {
    method,
    url,
    path,
    query,
    host,
    protocol,
    ip
  }
  console.log('client', client);
  await next()
  const responseTime = Date.now() - start;
  const logMessage = JSON.stringify(Object.assign(baseInfo, client, {
    responseTime: `${responseTime/1000}s`
  }))
  log.info(logMessage)
}