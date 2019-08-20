const { isEmpty } = require("lodash");
const processEntities = require("../../processor/message/entities");

const incomingMessageHandler = async (request, reply) => {

    const { body = {} } = request;
    console.log("Incoming message:::::::::");
    const data = JSON.parse(JSON.stringify(body));
    const { update_id = '', message = {} } = data;
    const { message_id = '', from = {}, chat = {}, date = '', text = '', entities = [] } = message;
    if (!isEmpty(entities)) {
        processEntities(data);
    }
    const { is_bot = false, first_name = '', last_name = '', language_code = '' } = from;
    const { id = '', type = '' } = chat;



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
