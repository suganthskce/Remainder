const fetchEvent = require('./../../requestMapper/event/fetchEvent');
const connect = require('./../../connector/database/connect');
const dekorator = require('./../../dekorator/event/fetchEvent');

const fetchEventHandler = async (request, reply) => {

    const { params = {} } = request;
    const requestData = fetchEvent(params);
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

module.exports = fetchEventHandler;
