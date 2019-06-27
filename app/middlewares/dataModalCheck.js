const helper = require("../helper/middlewares");

const dataModalCheck = (request, reply, next) => {
    const dataModal = helper.getDataModal(request.raw.originalUrl);
    if (!dataModal) {
        return next();
    }
    return next();
};

module.exports = dataModalCheck;
