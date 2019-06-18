const registerMapper = require('./../../requestMapper/user/register');
const connect = require('./../../connector/database/connect');

const registerHandler = async (request, reply) => {

    const { body = {} } = request;
    const requestData = registerMapper(body);
    if (requestData.success) {
        try {
            const dbResponse = await connect(requestData.query);
            reply.send({ data: dbResponse });
        } catch (err) {
            //logger.error(`${err}`);
            reply.send({ status: { success: false }, errors: [{ errCode: err.errno, message: err.sqlMessage }] });
        }
    }
}

module.exports = registerHandler;
