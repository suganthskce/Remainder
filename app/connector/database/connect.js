const mysql = require('mysql');
const config = require('./../../config/database_config');
const { isEmpty } = require('lodash');
//const logger = require('./../../lib/logger');

const connect = (sql = '') => {
    if (isEmpty(sql)) {
        return '';
    }
    return new Promise(function (resolve, reject) {
        const con = mysql.createConnection({
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.database
        });
        //logger.info(`Establishing connection to Database`);
        con.connect(function (err) {
            if (err) {
                //logger.error(`Error in establishing connection to Database`);
                reject(err);
                //throw { err, "message": "Error in establishing connection" };
            }
            //logger.info(`Connection Established`);
            //logger.info(`Executing Query`);
            con.query(sql, function (err, result, fields) {
                if (err) {
                    //logger.error(`Error in executing query -> ${sql}`);
                    reject(err);
                    //throw err;
                    //throw { err, "message": "Error in executing query" };
                }
                //logger.info(`Query Executed`);
                resolve(result);
            });
        });
    });
}

module.exports = connect;