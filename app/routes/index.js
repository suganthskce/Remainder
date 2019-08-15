const serverstatus = require('./serverstatus');
const register = require('./user/register');
const signIn = require('./user/signIn');
const update = require('./user/update');
const fetchUser = require('./user/fetchUser');
const addEvent = require('./event/addEvent');
const deleteEvent = require('./event/deleteEvent');
const editEvent = require('./event/editEvent');
const fetchEvent = require('./event/fetchEvent');
const listEvent = require('./event/listEvent');


//Messages
const incomingMessage = require('./messageService/incomingMessage');
const messageStatus = require('./messageService/messageStatus');

const routesInfo = {
    routes: [
        serverstatus, register,
        signIn,
        update, fetchUser,
        addEvent, deleteEvent,
        editEvent, fetchEvent,
        listEvent,
        incomingMessage, messageStatus
    ],
    exculsion: {
        decodeJwt: [
            serverstatus.url,
            signIn.url,
            incomingMessage.url,
            messageStatus.url
        ]
    },
    dataModal: {
        [register.url]: register.dataModal
    }
};

module.exports = routesInfo;