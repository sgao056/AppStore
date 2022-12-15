const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
 if (process.env.PROXY_ENV === 'proxy') {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://apiv2.iphonecake.com/', 
            changeOrigin: true
        })
    )
  }
}