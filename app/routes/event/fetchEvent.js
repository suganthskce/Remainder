const fetchEventHandler = require('./../../handler/event/fetchEventHandler');

const fetchEvent = {
    method: "GET",
    url: "/rms/event/fetch/:userId/:id",
    handler: fetchEventHandler
};

module.exports = fetchEvent;
