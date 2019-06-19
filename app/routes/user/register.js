const registerHandler = require('./../../handler/user/registerHandler');
const registerModal = require('./../../dataModal/user/register');

const register = {
    method: "POST",
    url: "/rms/register",
    handler: registerHandler,
    dataModal: registerModal
};

module.exports = register;
