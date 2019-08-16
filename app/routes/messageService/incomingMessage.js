const incomingMessageHandler = require('./../../handler/message/incomingMessageHandler');

const incomingMessage = {
    method: "PUT",
    url: "/rms/message/incoming",
    handler: incomingMessageHandler
};

module.exports = incomingMessage;
