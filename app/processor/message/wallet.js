const { isEmpty } = require("lodash");
const registerNewUser = require('../../requestMapper/message/registerNewUser');
const connect = require('./../../connector/database/connect');
const sendMessage = require('./../../connector/telegramApi/sendMessage');
const helpData = require('./../../constants/helperConstants');
const { logger } = require('./../../lib/logger');
const moment = require('moment');

const invalidData = (id) => {
    logger.error(`Invalid data in Wallet processing`);
    sendMessage(id, 'Invalid Data');
}

const sendUpdatedBalance = (id) => {
    const fetchBalance = `select balance from chat_user_details where id ='${id}';`;
    connect(fetchBalance).then(res => {
        const [{ balance = 0 }] = res;
        logger.info(`Balance updated for ${id}: Response-> ${JSON.stringify(res)}`);
        sendMessage(id, `Updated Balance: Rs.${balance}`);
    }).catch(err => {
        logger.error(`Error in Fetching balance for user ${id} : ${JSON.stringify(err)}`);
        sendMessage(id, 'Something went wrong');
    });
}

const debitAndCreditProcess = (id, textArray) => {
    const [type = '', amount = ''] = textArray;
    logger.info(`Processing ${type} for ${id}`);
    const comments = textArray.slice(3).join(' ');
    const sql = `insert into wallet_${id}(type,amount,comments) values('${type.toUpperCase()}','${amount}','${comments}');`
    connect(sql).then(response => {
        logger.info(`Adding ${type} for ${id}: ${JSON.stringify(response)}`);
        const sign = type.toLowerCase() === 'credit' ? '+' : '-';
        const userUpdate = `update chat_user_details set balance = balance ${sign} ${amount} where id = '${id}';`;
        connect(userUpdate).then(res => {
            logger.info(`Balance updated for ${id}: Response-> ${JSON.stringify(res)}`);
            sendUpdatedBalance(id);
        }).catch(err => {
            logger.error(`Error in updating user balance for ${id} : ${JSON.stringify(err)}`);
            sendMessage(id, 'Something went wrong');
        });
    }).catch(err => {
        logger.error(`Error in adding ${type} for ${id}: ${sql}\nError: ${JSON.stringify(err)}`);
        sendMessage(id, 'Something went wrong');
    });
}

const statementProcess = (id, textArray) => {
    const [type = '', duration = ''] = textArray;
    logger.info(`Fetching statement for ${id} with duration ${duration}`);
    let sql = '';
    switch (duration.toLowerCase()) {
        case "year":
            sql = `select * from wallet_${id} where created_on >= '${moment().subtract(1, 'years').format('YYYY-MM-DD HH:mm:ss')}'`;
            break;
        case "month":
            sql = `select * from wallet_${id} where created_on >= '${moment().subtract(1, 'months').format('YYYY-MM-DD HH:mm:ss')}'`;
            break;
        case "week":
            sql = `select * from wallet_${id} where created_on >= '${moment().subtract(7, 'days').format('YYYY-MM-DD HH:mm:ss')}'`;
            break;
        case "day":
            sql = `select * from wallet_${id} where created_on >= '${moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}'`;
            break;
        default:
            invalidData(id);
    }
    if (sql) {
        connect(sql).then(response => {
            let credit = 0.0, debit = 0.0;
            let data = response.map(row => {
                const { type = '', amount = 0, comments = '', created_on = '' } = row;
                if (type === 'CREDIT') {
                    credit += amount;
                } else if (type === 'DEBIT') {
                    debit += amount;
                }

                return `${moment(created_on, 'YYYY-MM-DD HH:mm:ss').add(330, 'minutes').format('lll')}: Rs.${amount} [${type}] ${comments}`;
            });
            data.push(`Total Credit: ${credit}\tTotal Debit: ${debit}`);
            logger.info(`Sending ${id}'s Statement: Total Credit: ${credit}\nTotal Debit: ${debit}`);
            sendMessage(id, data.join('\n'));
        }).catch(err => {
            logger.error(`Error in fetching statement for ${id}: ${JSON.stringify(err)}`);
            sendMessage(id, 'Something went wrong');
        })
    }
}

const checkInvalidCases = (chat = [], textArray) => {
    logger.info('Checking for invalid cases');
    // const textArray = text.trim().split(' ');
    logger.info(`textArray ${JSON.stringify(textArray)}`);
    const secondWord = ['credit', 'debit', 'statement'];
    const thirdWordStatement = ['year', 'month', 'week', 'day'];
    if (textArray.length < 2) {
        return true;
    }
    if (secondWord.indexOf(textArray[0].toLowerCase()) == -1) {
        return true;
    }
    if (textArray[0] === 'statement' && thirdWordStatement.indexOf(textArray[1].toLowerCase()) == -1) {
        return true;
    }
}


const wallet = (payload = {}) => {
    logger.info('Inside the wallet process');
    const { update_id = '', message = {} } = payload;
    const { message_id = '', from = {}, chat = {}, date = '', text = '', entities = [] } = message;
    let textArray = text.trim().split(' ');
    if (textArray[0] === 'wallet' || textArray[0] === 'w') {
        textArray = textArray.slice(1);
    }
    if (checkInvalidCases(chat, textArray)) {
        invalidData(chat.id);
    } else {
        switch (textArray[0].toLowerCase()) {
            case "debit":
                debitAndCreditProcess(from.id, textArray);
                break;
            case "credit":
                debitAndCreditProcess(from.id, textArray);
                break;
            case "statement":
                statementProcess(from.id, textArray);
                break;
            default:
                invalidData(chat.id);
        }
    }

}

module.exports = wallet;