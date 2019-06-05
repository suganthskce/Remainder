
const serverstatusHandler = async (request, reply) => {
    reply.send({ data: { message: "Sever is Up!" } });
}

module.exports = serverstatusHandler;
