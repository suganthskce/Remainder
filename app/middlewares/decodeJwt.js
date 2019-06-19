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
    if (helper.isExcluded(request.raw.originalUrl, 'decodeJwt')) {
        return next();
    }
    reply.send(sendAccessDeniedResponse());


    /*
    
        const { raw: { method } } = request;
        if (method == 'OPTIONS') {
            return next();
        }
        const authorization = request.headers["authorization"];
        request.userInfo = {};
        try {
            if (!_.isEmpty(authorization)) {
                const decodedJwt = jwtDecode(authorization);
                const { sub } = decodedJwt;
                if (!_.isEmpty(sub)) {
                    const userInfo = JSON.parse(sub);
                    const { userId, role = 'DEFAULT', eur = "", additionalInfo = {} } = userInfo;
                    request.userInfo.userId = userId;
                    request.userInfo.role = role;
                    request.userInfo.eur = eur;
                    request.userAdditionalInfo = additionalInfo;
                }
                return next();
            } else {
                reply.send(sendAccessDeniedResponse());
            }
        } catch (e) {
            // throw new Error(e);
            reply.send(sendAccessDeniedResponse());
        }*/
};

module.exports = decodeJwt;
