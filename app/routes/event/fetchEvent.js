const fetchEventHandler = require('./../../handler/event/fetchEventHandler');

const fetchEvent = {
    method: "GET",
    url: "/rms/event/fetch/:id",
    handler: fetchEventHandler
};

module.exports = fetchEvent;
