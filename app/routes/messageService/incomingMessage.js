const incomingMessageHandler = require('./../../handler/message/incomingMessageHandler');

const incomingMessage = {
    method: "POST",
    url: "/rms/message/incoming",
    handler: incomingMessageHandler
};

module.exports = incomingMessage;
