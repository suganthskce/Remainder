const signInHandler = require('./../../handler/user/signInHandler');

const signIn = {
    method: "POST",
    url: "/rms/sign-in",
    handler: signInHandler
};

module.exports = signIn;
