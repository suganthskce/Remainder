const helper = require("../helper/middlewares");

const dataModalCheck = (request, reply, next) => {
    const dataModal = helper.getDataModal(request.raw.originalUrl);
    if (!dataModal) {
        return next();
    }
    console.log("dataModal", dataModal);
    return next();
};

module.exports = dataModalCheck;
