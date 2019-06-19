const fetchUser = require('./../../requestMapper/user/fetchUser');
const connect = require('./../../connector/database/connect');
const dekorator = require('./../../dekorator/user/fetchUser');

const fetchUserHandler = async (request, reply) => {

    const { params = {} } = request;
    const { id = '' } = params;
    if (id) {
        const requestData = fetchUser(id);
        try {
            const dbResponse = await connect(requestData.query);
            reply.send(dekorator(dbResponse));
        } catch (err) {
            //logger.error(`${err}`);
            reply.send({ status: { success: false }, errors: [{ errCode: err.errno, message: err.sqlMessage }] });
        }
    } else {
        reply.send({ "message": "Qauery not success" });
    }
}

module.exports = fetchUserHandler;
