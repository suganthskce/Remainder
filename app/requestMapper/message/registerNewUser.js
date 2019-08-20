const { logger } = require('../../lib/logger');

const registerNewUser = (payload = {}) => {
    const { id = '', is_bot = false, first_name = '', last_name = '', language_code = '' } = payload;
    logger.info(`Registering new users`);
    logger.info(`${JSON.stringify(payload)}`);
    const keys = Object.keys(payload);
    const values = keys.map(key => {
        return typeof payload[key] === 'boolean' ? payload[key] ? 1 : 0 : payload[key];
    });
    const query = `insert into chat_user_details(${keys.join(',')}) values ('${values.join("','")}');`;
    return {
        query,
        success: true
    };

}

module.exports = registerNewUser;