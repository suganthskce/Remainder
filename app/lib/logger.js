const constant = require('./../config/constants/Constants');
const config = require('./../config/configuration');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
const moment = require('moment');
const nodeEnv = process.env.NODE_ENV || 'development';
const httpContext = require('express-http-context');

const logFormatter = printf((options) => {
    return `${options.label}:[${moment().format('DD/MM/YYYY hh:mm:ss')}] [${options.level.toUpperCase()}] - ${options.message ? options.message : ''}`;
    // return JSON.stringify(Object.assign({}, {
    //     timestamp: moment().format('DD/MM/YYYY hh:mm:ss'),
    //     label: options.label,
    //     level: options.level.toUpperCase(),
    //     message: options.message ? options.message : '',
    // }, options.meta, httpContext.get('requestParams')))
})

const logger = createLogger({
    emitErrs: false,
    format: combine(
        label({
            level: config.get('logging:consoleLevel'),
            label: config.get('logging:label'),
        }),
        timestamp(),
        logFormatter
    ),
    transports: [
        new transports.Console({
            level: config.get('logging:consoleLevel'),
            label: config.get('logging:label'),
            handleException: true,
            json: false,
            colorize: true,
            formatter: logFormatter
        }),

        new transports.File({
            level: config.get('logging:fileLevel'),
            label: config.get('logging:label'),
            name: 'log_file',
            filename: constant.path.log + 'SUGANTH-' + nodeEnv + '-' + moment().format('YYYY_MM_DD') + '.log',
            handleException: true,
            json: false,
            maxSize: 52428800,
            maxFiles: 10,
            prettyPrint: true,
            formatter: logFormatter
        })
    ]
});

/** Return Logger instances */
module.exports = {
    logger: logger
};
