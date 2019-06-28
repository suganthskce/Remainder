const addEventMapper = require('./../../requestMapper/event/addEvent');
const connect = require('./../../connector/database/connect');

const addEventHandler = async (request, reply) => {

    const { body = {}, decoded = {} } = request;
    const requestData = addEventMapper(body, decoded);
    if (requestData.success) {
        try {
            const dbResponse = await connect(requestData.query);
            const { insertId = '' } = dbResponse;
            if (insertId) {
                reply.send({ data: `Event added. Event Id: ${insertId}` });
            }
            reply.send({ message: "Something went wrong", status: { success: false } });
        } catch (err) {
            reply.send({ status: { success: false }, errors: [{ errCode: err.errno, message: err.sqlMessage }] });
        }
    } else {
        reply.send({ "message": "Qauery not success" });
    }
}

module.exports = addEventHandler;
