
const incomingMessageHandler = async (request, reply) => {

    const { body = {} } = request;
    console.log("Incoming message:::::::::");
    console.log(`${JSON.stringify(body)}`);
}

module.exports = incomingMessageHandler;
