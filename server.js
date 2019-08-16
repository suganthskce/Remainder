let fastify = require("fastify")();
const bootstrap = require("./app/config/bootstrap");

bootstrap.init(fastify);
fastify.register(require("fastify-formbody"));
const PORT = 8080;

fastify.register(require("fastify-cors"), { methods: ['OPTION', 'GET', 'PUT', 'POST'], exposedHeaders: ['Content-Type', 'Authorization'] });
fastify.listen(PORT, "0.0.0.0", err => {
  console.log(`Backend is started at PORT: ${PORT} / Enviroment Variable = ${process.env.BACKEND_ENV}`);
  console.log(`Error -> `, err);
});