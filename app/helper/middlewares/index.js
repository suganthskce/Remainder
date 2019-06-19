const routes = require('../../routes');

let helper = {};

helper.isExcluded = (path, key) => {
    const { exculsion = '' } = routes;
    const exculsionArray = exculsion[key] || [];
    return exculsionArray.includes(path);
}

helper.getDataModal = (path) => {
    const { dataModal = {} } = routes;
    const modal = dataModal[path];
    return modal;
}

module.exports = helper;