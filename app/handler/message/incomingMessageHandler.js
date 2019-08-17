
const incomingMessageHandler = async (request, reply) => {

    const { body = {} } = request;
    console.log("Incoming message:::::::::");
    //const ddd = JSON.parse(JSON.stringify(body));
    //console.log("ddd", ddd);
    //const { Bodydsad = '', asd = '' } = ddd;
    //console.log("Bodydsad", Bodydsad);
    console.log(`${JSON.stringify(body)}`);

    //const MessagingResponse = require('twilio').twiml.MessagingResponse;
    reply.send('');
    //reply.header('Content-Type', 'text/xml');
    //const response = new MessagingResponse();
    //response.message('Message Delivered....');
    //reply.send(response.toString());
}

module.exports = incomingMessageHandler;
