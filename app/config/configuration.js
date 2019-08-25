const nconf = require('nconf');
const nodeEnv = process.env.NODE_ENV || 'development';
const apiKey = process.env.BOTAPIKEY || '';

nconf.argv().env();
nconf.file("config", `app/config/env/${nodeEnv}.json`);
nconf.set('apiKey', apiKey);

module.exports = nconf;