const deleteEventMapper = require('./../../requestMapper/event/deleteEvent');
const connect = require('./../../connector/database/connect');

const deleteEventHandler = async (request, reply) => {

    const { params = {} } = request;
    const requestData = deleteEventMapper(params);
    if (requestData.success) {
        try {
            const dbResponse = await connect(requestData.query);
            reply.send({ data: `Event Deleted.`, dbResponse });
        } catch (err) {
            reply.send({ status: { success: false }, errors: [{ errCode: err.errno, message: err.sqlMessage }] });
        }
    } else {
        reply.send({ "message": "Qauery not success" });
    }
}

module.exports = deleteEventHandler;
