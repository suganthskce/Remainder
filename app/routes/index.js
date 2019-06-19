const serverstatus = require('./serverstatus');
const register = require('./user/register');

const routesInfo = {
    routes: [
        serverstatus,
        register,
    ],
    exculsion: {
        decodeJwt: [
            serverstatus.url,
            register.url,
        ]
    },
    dataModal: {
        [register.url]: register.dataModal
    }
};

module.exports = routesInfo;