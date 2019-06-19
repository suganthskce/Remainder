let jwtDecode = require("jwt-decode");
let _ = require("lodash");
//const logger = require('./../lib/logger');
const helper = require("../helper/middlewares");

const sendAccessDeniedResponse = () => {
    return {
        "status": {
            "success": false,
            "httpStatus": 403
        },
        "errors": [
            {
                "errCode": "403",
                "message": "Access Denied"
            }
        ]
    }
}

const decodeJwt = (request, reply, next) => {
    return next();
    if (helper.isExcluded(request.raw.originalUrl, 'decodeJwt')) {
        return next();
    }
    reply.send(sendAccessDeniedResponse());
};

module.exports = decodeJwt;
