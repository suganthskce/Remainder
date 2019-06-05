const routes = require("./routes");
const config = require("./configuration");
const middlewares = require("./../middlewares");


global.conf = { config };


const bootstrap = {
    init: function (fastify) {
        routes.customRoutes(fastify);
        middlewares.initialize(fastify);
    }
}

module.exports = bootstrap;