const middleware = {
  requireAuthentication: (req, res, next) => {
    console.log('private route hit!');
    next();
  },
  logger: (req, res, next) => {
    // console.log('request', req);
    // console.log('response', res);
    console.log(req.method, req.originalUrl, new Date().toString());
    next();
  },
};

module.exports = middleware;
