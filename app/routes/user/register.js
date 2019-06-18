const registerHandler = require('./../../handler/user/registerHandler');

const register = {
    method: "POST",
    url: "/rms/register",
    handler: registerHandler
};

module.exports = register;
