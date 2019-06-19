const updateHandler = require('./../../handler/user/updateHandler');

const update = {
    method: "POST",
    url: "/rms/update",
    handler: updateHandler
};

module.exports = update;
