# Koa 后端 Demo

开箱就用 最基本的 session redis log mongo socket 中间件

node >= 10

npm i && npm run dev

## HTTPS

`app/env` 包含根证书和服务器证书

## Cookies 操作

    ctx.cookies.set('cookies-name', 'cookies-value')
    let cookies = ctx.cookies.get('cookies-name')

## TODO

- [ ] socket 通信