const updateMapper = require('./../../requestMapper/user/update');
const connect = require('./../../connector/database/connect');

const updateHandler = async (request, reply) => {

    const { body = {} } = request;
    const requestData = updateMapper(body);
    if (requestData.success) {
        try {
            const dbResponse = await connect(requestData.query);
            reply.send({ data: dbResponse });
        } catch (err) {
            //logger.error(`${err}`);
            reply.send({ status: { success: false }, errors: [{ errCode: err.errno, message: err.sqlMessage }] });
        }
    } else {
        reply.send({ "message": "Qauery not success" });
    }
}

module.exports = updateHandler;
