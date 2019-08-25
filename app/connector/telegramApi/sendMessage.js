const axios = require("axios");
const { logger } = require("./../../lib/logger");
const config = require('./../../config/configuration');

const sendMessage = (chat_id, text) => {
    logger.info(`Sending message to user[${chat_id}]: ${text}`);
    const options = {
        url: `https://api.telegram.org/${config.get('apiKey')}/sendMessage`,
        method: 'POST',
        data: {
            chat_id,
            text
        }
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
