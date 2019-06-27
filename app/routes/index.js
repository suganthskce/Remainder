const serverstatus = require('./serverstatus');
const register = require('./user/register');
const update = require('./user/update');
const fetchUser = require('./user/fetchUser');
const addEvent = require('./event/addEvent');
const deleteEvent = require('./event/deleteEvent');
const editEvent = require('./event/editEvent');
const fetchEvent = require('./event/fetchEvent');
const listEvent = require('./event/listEvent');

const routesInfo = {
    routes: [
        serverstatus, register,
        update, fetchUser,
        addEvent, deleteEvent,
        editEvent, fetchEvent,
        listEvent
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