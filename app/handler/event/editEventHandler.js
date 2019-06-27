const editEventMapper = require('./../../requestMapper/event/editEvent');
const connect = require('./../../connector/database/connect');

const editEventHandler = async (request, reply) => {

    const { body = {} } = request;
    const requestData = editEventMapper(body);
    if (requestData.success) {
        try {
            console.log("Query", requestData.query);
            const dbResponse = await connect(requestData.query);
            reply.send({ data: `Event Modified.`, dbResponse });
        } catch (err) {
            reply.send({ status: { success: false }, errors: [{ errCode: err.errno, message: err.sqlMessage }] });
        }
    } else {
        reply.send({ "message": "Qauery not success" });
    }
}

module.exports = editEventHandler;
