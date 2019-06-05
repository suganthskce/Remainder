let fastify = require("fastify")();
const bootstrap = require("./app/config/bootstrap");

bootstrap.init(fastify);

const PORT = 8080;

fastify.listen(PORT, "0.0.0.0", err => {
  console.log(`Backend is started at PORT: ${PORT} / Enviroment Variable = ${process.env.BACKEND_ENV}`);
  console.log(`Error -> `, err);
});