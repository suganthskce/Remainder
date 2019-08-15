
const aerospikeConnect = require('./../connector/aerospike/connect');
const serverstatusHandler = async (request, reply) => {
    //aerospikeConnect();
    reply.send({ data: { message: "Sever is Up!" } });
}

module.exports = serverstatusHandler;
