const nconf = require('nconf');
const nodeEnv = process.env.NODE_ENV || 'development';

nconf.argv().env();
nconf.file("config", `app/config/env/${nodeEnv}.json`);

module.exports = nconf;