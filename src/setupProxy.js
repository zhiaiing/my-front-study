const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/gateway/component/api',
        createProxyMiddleware({
            target: "https://qa2.ihr360.com",
            changeOrigin: true,
        })
    )
    app.use(
        '/gateway',
        createProxyMiddleware({
            target: 'https://qa2.ihr360.com',
            changeOrigin: true,
        })
    )
    app.use(
        '/web/gateway',
        createProxyMiddleware({
            target: 'https://qa2.ihr360.com',
            changeOrigin: true,
        })
    )
    app.use(
        '/web',
        createProxyMiddleware({
            target: 'https://qa2.ihr360.com',
            changeOrigin: true,
            pathRewrite: {
                "^/web": "/gateway/web"
            }
        })
    )
    app.use(
        '/api/gateway',
        createProxyMiddleware({
            target: 'https://qa2.ihr360.com',
            changeOrigin: true,
        })
    )
};