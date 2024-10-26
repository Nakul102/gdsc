const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/socket.io',
    createProxyMiddleware({
      target: 'https://data.gdscnsut.com',
      changeOrigin: true,
    })
  );
};
