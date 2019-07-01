const mapper = require('./../../requestMapper/user/signIn');
const connect = require('./../../connector/database/connect');
const dekorator = require('./../../dekorator/user/signIn');
const jwt = require('jsonwebtoken');

const signInHandler = async (request, reply) => {
    const { body = {} } = request;
    const requestData = mapper(body);
    if (requestData.success) {
        try {
            const dbResponse = await connect(requestData.query);
            const { success = false, userInfo = {} } = dekorator(dbResponse);
            if (success) {
                var token = jwt.sign(userInfo, 'suganth', {
                    expiresIn: 900 // expires in 15 minutes
                });
                reply.send({ userInfo: { ...userInfo, token } });
            }
            reply.send({ errors: [{ errCode: 400, message: "Invalid username or Password" }], status: { success: false } });
        } catch (err) {
            //logger.error(`${err}`);
            reply.send({ status: { success: false }, errors: [{ errCode: err.errno, message: err.sqlMessage }] });
        }
    } else {
        reply.send({ "message": "Query not success" });
    }
}

module.exports = signInHandler;