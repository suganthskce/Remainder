const { isEmpty } = require("lodash");
const connect = require('./../../connector/stocks/connect');
const sendMessage = require('./../../connector/telegramApi/sendMessage');
const { logger } = require('./../../lib/logger');
const moment = require('moment');

const invalidData = (id) => {
    logger.error(`Invalid data in Wallet processing`);
    sendMessage(id, 'Invalid Data');
}

const checkInvalidCases = (chat = [], textArray) => {
    logger.info('Checking for invalid cases');
    logger.info(`textArray ${JSON.stringify(textArray)}`);
    if (textArray.length < 3) {
        return true;
    }
    return false;
}

const fetchReport = (id, textArray) => {
    let [type = '', day = '', code = ''] = textArray;
    code = code.toUpperCase();
    logger.info(`Fetching the data for ${code}`);
    let sql = '';
    sql = `select * from daily_data where stock_code='${code}' and created_at >= '${moment().subtract(day, 'days').format('YYYY-MM-DD HH:mm:ss')}';`
    connect(sql).then(response => {
        let data = [`${code}:`];
        data = response.map(row => {
            const { stock_code = '', price_change = '', prev_close = '', open = '', close = '', high = '', low = '', created_at = '' } = row;
            return `${moment(created_at, 'YYYY-MM-DD HH:mm:ss').add(330, 'minutes').format('lll')}:\n Open: ${open}   Close: ${close} \nPrev.Close: ${prev_close}  \nHigh: ${high} Low: ${low}\nDiff: ${(high - low).toFixed(2)}  Result: ${price_change}\n`;
        });
        logger.info(`Sending ${code} Stock Data to ${id}`);
        sendMessage(id, data.join('\n'));
    }).catch(err => {
        logger.error(`Error in fetching stock for ${code}: ${JSON.stringify(err)}`);
        sendMessage(id, 'Something went wrong');
    })
}

const fetchDailyData = (payload) => {
    logger.info('Inside the wallet process');
    const { update_id = '', message = {} } = payload;
    const { message_id = '', from = {}, chat = {}, date = '', text = '', entities = [] } = message;
    let textArray = text.trim().split(' ');
    if (textArray[0].toLowerCase() === 's' || textArray[0].toLowerCase() === 'stock' || textArray[0].toLowerCase() === 'stocks') {
        textArray = textArray.slice(1);
    }
    if (checkInvalidCases(chat, textArray)) {
        invalidData(chat.id);
    } else {
        switch (textArray[0].toLowerCase()) {
            case "report":
                fetchReport(from.id, textArray);
                break;
            default:
                invalidData(chat.id);
        }
    }

}

module.exports = fetchDailyData;