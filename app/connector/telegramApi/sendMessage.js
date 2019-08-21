const axios = require("axios");
const { logger } = require("./../../lib/logger");
const sendMessage = (chat_id, text) => {
    logger.info(`Sending message to user[${chat_id}]: ${text}`);
    const options = {
        url: `https://api.telegram.org/${process.env.BOTAPIKEY}/sendMessage`,
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
