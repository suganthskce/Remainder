const messageStatusHandler = require('./../../handler/message/messageStatusHandler');

const messageStatus = {
    method: "PUT",
    url: "/rms/message/status-update",
    handler: messageStatusHandler
};

module.exports = messageStatus;
