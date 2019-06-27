const listEventHandler = require('./../../handler/event/listEventHandler');

const listEvent = {
    method: "POST",
    url: "/rms/event/list",
    handler: listEventHandler
};

module.exports = listEvent;
