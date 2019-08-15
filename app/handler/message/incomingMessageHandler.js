
const incomingMessageHandler = async (request, reply) => {

    const { body = {} } = request;
    console.log("Incoming message:::::::::");
    console.log(`${JSON.stringify(body)}`);
    reply.send({ message: "Message Displayed" });
}

module.exports = incomingMessageHandler;
