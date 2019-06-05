const serverstatus = require('./serverstatus');

const routesInfo = {
    routes: [
        serverstatus,
    ],
    exculsion: {
        decodeJwt: [
            serverstatus.url
        ]
    }
};

module.exports = routesInfo;