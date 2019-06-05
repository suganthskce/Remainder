const routesInfo = require("./../routes");

const _ = require("lodash");

const customRoutes = fastify => {
  _.forEach(routesInfo.routes, (route) => {
    fastify.route(route);
  });
  return fastify;
};

const routes = {
  customRoutes
};

module.exports = routes;
