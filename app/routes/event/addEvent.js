const addEventHandler = require('./../../handler/event/addEventHandler');

const addEvent = {
    method: "POST",
    url: "/rms/event/add",
    handler: addEventHandler
};

module.exports = addEvent;
