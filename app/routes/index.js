const serverstatus = require('./serverstatus');
const register = require('./user/register');
const update = require('./user/update');
const fetchUser = require('./user/fetchUser');
const addEvent = require('./event/addEvent');
const deleteEvent = require('./event/deleteEvent');
const editEvent = require('./event/editEvent');

const routesInfo = {
    routes: [
        serverstatus, register,
        update, fetchUser,
        addEvent, deleteEvent,
        editEvent
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