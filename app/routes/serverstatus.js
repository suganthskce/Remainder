const serverstatusHandler = require('./../handler/serverstatusHandler');

const serverstatus = {
    method: "GET",
    url: "/rms/status",
    handler: serverstatusHandler
};

module.exports = serverstatus;
