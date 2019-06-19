const serverstatus = require('./serverstatus');
const register = require('./user/register');
const update = require('./user/update');
const fetchUser = require('./user/fetchUser');

const routesInfo = {
    routes: [
        serverstatus,
        register,
        update,
        fetchUser
    ],
    exculsion: {
        decodeJwt: [
            serverstatus.url
        ]
    },
    dataModal: {
        [register.url]: register.dataModal
    }
};

module.exports = routesInfo;