const routes = require('./../routes');

let helper = {};

helper.isExcluded = (path, key) => {
    const { exculsion = '' } = routes;
    const exculsionArray = exculsion[key] || [];
    return exculsionArray.includes(path);
}

module.exports = helper;