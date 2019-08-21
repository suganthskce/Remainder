const { isEmpty } = require("lodash");
const processEntities = require("../../processor/message/entities");
const sendMessage = require("./../../connector/telegramApi/sendMessage");
const { logger } = require("./../../lib/logger");

const incomingMessageHandler = async (request, reply) => {

    const { body = {} } = request;
    const data = JSON.parse(JSON.stringify(body));
    logger.info(data);
    const { update_id = '', message = {} } = data;
    const { message_id = '', from = {}, chat = {}, date = '', text = '', entities = [] } = message;
    if (!isEmpty(entities)) {
        processEntities(data);
    } else {
        switch (getKeyFromMessage(text)) {
            case "WALLET":
                sendMessage(from.id, `Key: WALLET`);
                break;
            case "ERROR":
            default:
                sendMessage(from.id, 'Invalid Input');
        }
    }
    const { is_bot = false, first_name = '', last_name = '', language_code = '' } = from;
    const { id = '', type = '' } = chat;

    reply.send('');
}

const pattern = {
    WALLET: [/#w/i, /#wallet/i]
}


const getKeyFromMessage = (text) => {
    const keys = Object.keys(pattern);
    const length = keys.length;
    for (let i = 0; i < length; i++) {
        logger.info(`Checking with ${keys[i]} patterns`);
        const patternArray = pattern[keys[i]];
        const patternLength = patternArray.length;
        let matched = false;
        for (let j = 0; j < patternLength; j++) {
            // Change conditions
            if (patternArray[j].test(text)) {
                matched = true;
            }
        }
        if (matched) {
            logger.info(`Matched with key ${keys[i]}`);
            return keys[i];
        }
    }
    logger.info(`No pattern Found`);
    return 'ERROR';
}

module.exports = incomingMessageHandler;
