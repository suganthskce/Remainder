const serverstatusHandler = require('./../handler/serverstatusHandler');

const serverstatus = {
    method: "GET",
    url: "/",
    handler: serverstatusHandler
};

module.exports = serverstatus;
