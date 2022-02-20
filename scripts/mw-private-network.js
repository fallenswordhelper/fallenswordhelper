class PrivateNetwork {
  // eslint-disable-next-line class-methods-use-this
  middleware() {
    return async (ctx, next) => {
      if (ctx.get('Access-Control-Request-Private-Network')) {
        ctx.set('Access-Control-Allow-Private-Network', 'true');
      }
      await next();
    };
  }
}

module.exports = PrivateNetwork;
