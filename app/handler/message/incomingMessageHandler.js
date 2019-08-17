
const incomingMessageHandler = async (request, reply) => {

    const { body = {} } = request;
    console.log("Incoming message:::::::::");
    console.log(`${JSON.stringify(body)}`);

    const MessagingResponse = require('twilio').twiml.MessagingResponse;

    reply.header('Content-Type', 'text/xml');
    const response = new MessagingResponse();
    response.message('Message Delivered....');
    reply.send(response.toString());
}

module.exports = incomingMessageHandler;
