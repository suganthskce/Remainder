
const messageStatusHandler = async (request, reply) => {

    const { body = {} } = request;
    console.log("Message Status:::::::::");
    console.log(`${JSON.stringify(body)}`);
}

module.exports = messageStatusHandler;
