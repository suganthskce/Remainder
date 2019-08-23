const { isEmpty } = require("lodash");
const registerNewUser = require('../../requestMapper/message/registerNewUser');
const connect = require('./../../connector/database/connect');
const sendMessage = require('./../../connector/telegramApi/sendMessage');
const helpData = require('./../../constants/helperConstants');
const { logger } = require('./../../lib/logger');

const firstLevelData = [
    '{help wallet} to get WALLET api details}'
];


const helpMessages = (payload = {}) => {
    const { update_id = '', message = {} } = payload;
    const { message_id = '', from = {}, chat = {}, date = '', text = '', entities = [] } = message;
    const secondaryIndex = Object.keys(helpData);
    const textArray = text.split(' ');
    const secondtext = textArray[1] || '';
    if (secondaryIndex.includes(secondtext)) {
        const str = helpData[secondtext].join('\n\n');
        sendMessage(chat.id, str);
    } else {
        const str = firstLevelData.join('\n\n');
        sendMessage(chat.id, str);
    }
}

module.exports = helpMessages;