const listEventMapper = require('./../../requestMapper/event/listEvent');
const connect = require('./../../connector/database/connect');
const dekorator = require('./../../dekorator/event/listEvent');

const listEventHandler = async (request, reply) => {
    const { body = {}, decoded = {} } = request;
    const requestData = listEventMapper(body, decoded);
    if (requestData.success) {
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

module.exports = listEventHandler;
