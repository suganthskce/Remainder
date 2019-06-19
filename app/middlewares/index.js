/**
 * Middleware List to be executed before each Request
 */
let BaseMiddleware = require("./base-middleware");

module.exports = {
    order: {
        preHandler: ["decodeJwt", "dataModalCheck"],
        onSend: ["makeResponse"]
    },
    initialize: function (app) {
        let middleware;
        this.order.preHandler.forEach((item) => {
            middleware = require("./" + item);
            let baseMiddlwareObj = new BaseMiddleware();
            baseMiddlwareObj.init(app, "preHandler", middleware);
        });
        this.order.onSend.forEach((item) => {
            middleware = require("./" + item);
            let baseMiddlwareObj = new BaseMiddleware();
            baseMiddlwareObj.init(app, "onSend", middleware);
        });
    }
};
