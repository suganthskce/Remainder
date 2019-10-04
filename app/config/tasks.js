/**
 * This config file is to fetch the access control configuration for each role and user
 */
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const stock = require('./constants/stock.json');
const { logger } = require("./../lib/logger");
const sendMessage = require("./../connector/telegramApi/sendMessage");

const getStock = async () => {
    logger.info(`Inside getStock`);
    const { stockList = [] } = stock;
    stockList.forEach(data => {
        const { id = '', url = '', fetchData = [], chatId = [] } = data;
        logger.info(`Fetching stock for id`);
        puppeteer
            .launch()
            .then(browser => browser.newPage())
            .then(page => {
                logger.info(`Loading page`);
                return page.goto(url).then(function () {
                    return page.content();
                });
            })
            .then(html => {
                logger.info(`Loading HTML`);
                const $ = cheerio.load(html);
                let result = {};
                let message = `${id}\n`;
                fetchData.forEach(content => {
                    const { key = '', selector = '' } = content;
                    const value = $(selector).text();
                    result[key] = value;
                    message = message + `[${key}]:${value}\n`;
                });
                chatId.forEach(chat => {
                    sendMessage(chat, message);
                });
                logger.info(`Result: ${JSON.stringify(result)}`);
            })
            .catch(console.error);
    });
}

setConfigInterval = () => {
    setInterval(() => {
        getStock();
    }, 1000 * 60 * 60 * 24);
}

const initialize = () => {
    getStock();
    setConfigInterval();
}

module.exports = { initialize };
