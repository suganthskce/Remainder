const axios = require("axios");
const { logger } = require("./../../lib/logger");
const sendMessage = (data) => {
    logger.info(`Sending message to user: [data]-${JSON.stringify(data)}`);
    const options = {
        url: 'https://api.telegram.org/bot906297282:AAHpp2qgLpyxniwoNrE93A476rMTcQIxHKo/sendMessage',
        method: 'POST',
        data
    };
    return axios(options)
        .then(responseData => {
            logger.info(`Send Message Success`);
        })
        .catch(err => {
            logger.error("Error in sending message", err);
        });
}

module.exports = sendMessage;
