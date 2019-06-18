const serverstatusHandler = require('./../handler/serverstatusHandler');

const serverstatus = {
    method: "GET",
    url: "/rms",
    handler: serverstatusHandler
};

module.exports = serverstatus;
