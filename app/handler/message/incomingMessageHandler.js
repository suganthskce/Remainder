const { isEmpty } = require("lodash");
const processEntities = require("../../processor/message/entities");
const sendMessage = require("./../../connector/telegramApi/sendMessage");

const incomingMessageHandler = async (request, reply) => {

    const { body = {} } = request;
    console.log("Incoming message:::::::::");
    const data = JSON.parse(JSON.stringify(body));
    const { update_id = '', message = {} } = data;
    const { message_id = '', from = {}, chat = {}, date = '', text = '', entities = [] } = message;
    if (!isEmpty(entities)) {
        processEntities(data);
    } else {
        switch (getKeyFromMessage(text)) {
            case "WALLET":

            default:
                sendMessage(from.id, 'Invalid Input');
        }
    }
    const { is_bot = false, first_name = '', last_name = '', language_code = '' } = from;
    const { id = '', type = '' } = chat;

    reply.send('');
}




const getKeyFromMessage = (text) => {

}

module.exports = incomingMessageHandler;
