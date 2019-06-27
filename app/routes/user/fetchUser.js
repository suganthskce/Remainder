const fetchUserHandler = require('./../../handler/user/fetchUserHandler');

const fetchUser = {
    method: "GET",
    url: "/rms/user/fetch/:id",
    handler: fetchUserHandler
};

module.exports = fetchUser;
