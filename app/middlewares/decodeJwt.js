let jwtDecode = require("jwt-decode");
let _ = require("lodash");
//const logger = require('./../lib/logger');
const helper = require("../helper/middlewares");
const jwt = require('jsonwebtoken');

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
    const { headers = {} } = request;
    const { authorization = '' } = headers;
    const token = authorization.split(' ');
    if (token[0]) {
        jwt.verify(token[0], 'suganth', function (err, decoded) {
            if (err) {
                reply.send(sendAccessDeniedResponse());
            } else {
                request.decoded = decoded;
                next();
            }
        });
    } else {
        reply.send(sendAccessDeniedResponse());
    }
};

module.exports = decodeJwt;
