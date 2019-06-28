const deleteEventHandler = require('./../../handler/event/deleteEventHandler');

const deleteEvent = {
    method: "DELETE",
    url: "/rms/event/:id",
    handler: deleteEventHandler
};

module.exports = deleteEvent;
