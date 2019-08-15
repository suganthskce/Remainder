
const messageStatusHandler = async (request, reply) => {

    const { body = {} } = request;
    console.log("Message Status:::::::::");
    console.log(`${JSON.stringify(body)}`);
    reply.send({ message: "Message Displayed" });
}

module.exports = messageStatusHandler;
