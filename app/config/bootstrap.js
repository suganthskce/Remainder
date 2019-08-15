const routes = require("./routes");
const config = require("./configuration");
const middlewares = require("./../middlewares");
const tasks = require("./tasks");

global.conf = { config };


const bootstrap = {
    init: function (fastify) {
        routes.customRoutes(fastify);
        middlewares.initialize(fastify);
        tasks.initialize(fastify);
    }
}

module.exports = bootstrap;