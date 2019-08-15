const messageStatusHandler = require('./../../handler/message/messageStatusHandler');

const messageStatus = {
    method: "POST",
    url: "/rms/message/status-update",
    handler: messageStatusHandler
};

module.exports = messageStatus;
