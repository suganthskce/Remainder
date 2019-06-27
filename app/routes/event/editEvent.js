const editEventHandler = require('./../../handler/event/editEventHandler');

const editEvent = {
    method: "POST",
    url: "/rms/event/edit",
    handler: editEventHandler
};

module.exports = editEvent;
