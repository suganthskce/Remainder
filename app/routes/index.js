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
    }
};

module.exports = routesInfo;