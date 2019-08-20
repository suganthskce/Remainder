const { isEmpty } = require("lodash");
const registerNewUser = require('../../requestMapper/message/registerNewUser');
const connect = require('./../../connector/database/connect');
const sendMessage = require('./../../connector/telegramApi/sendMessage');
const { logger } = require('./../../lib/logger');

const processEntities = (payload = {}) => {
    const { update_id = '', message = {} } = payload;
    const { message_id = '', from = {}, chat = {}, date = '', text = '', entities = [] } = message;
    entities.map(async entry => {
        const { offset = '', length = 0, type = '' } = entry;
        switch (type) {
            case "bot_command":
                switch (text) {
                    case "/start":
                        const requestData = registerNewUser(from);
                        if (requestData.success) {
                            try {
                                const dbResponse = await connect(requestData.query);

                                //Welcome Message:
                                sendMessage(from.id, 'Account Registered');
                                connect(`CREATE TABLE wallet_${from.id}(id INT AUTO_INCREMENT PRIMARY KEY,type VARCHAR(25),amount FLOAT NOT NULL,comments TEXT);`);
                                logger.info(`User Added for Chat Api`);
                            } catch (err) {
                                logger.error("Error in Adding user:", err);
                            }
                        }
                }
                break;
        }
    });
}

module.exports = processEntities;