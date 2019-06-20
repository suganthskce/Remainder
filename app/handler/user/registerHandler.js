const registerMapper = require('./../../requestMapper/user/register');
const connect = require('./../../connector/database/connect');

const registerHandler = async (request, reply) => {

    const { body = {} } = request;
    const requestData = registerMapper(body);
    if (requestData.success) {
        try {
            const dbResponse = await connect(requestData.query);
            const { insertId = '' } = dbResponse;
            if (insertId) {
                const response = await connect(`create table IF NOT EXISTS event_${insertId}(event_id INT AUTO_INCREMENT  PRIMARY KEY,  deleted TINYINT(1) DEFAULT 0 ,name VARCHAR(255) NOT NULL, description TEXT DEFAULT NULL, evtData DATE NOT NULL,addInfo json DEFAULT NULL,updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),created_at TIMESTAMP NOT NULL DEFAULT NOW());`);
                reply.send({ data: "User Registration Success" });
            }
            reply.send({ message: "Something went wrong", status: { success: false } });
        } catch (err) {
            //logger.error(`${err}`);
            reply.send({ status: { success: false }, errors: [{ errCode: err.errno, message: err.sqlMessage }] });
        }
    } else {
        reply.send({ "message": "Qauery not success" });
    }
}

module.exports = registerHandler;
