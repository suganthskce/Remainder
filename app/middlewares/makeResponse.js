const { isEmpty } = require("lodash");


const makeResponse = (request, reply, payload, next) => {
    //next(null, payload);
    try {
        payload = !isEmpty(payload) ? JSON.parse(payload) : {};
        const { status = {}, meta = {} } = payload;
        const { success = true } = status;
        const { maxAge = 0 } = meta;
        if (!success) {
            reply.status(400);
            return next(null, JSON.stringify(payload));
        }
        const newPayload = {
            payload,
            status: {
                success
            }
        };
        const authorization = request.newAuthorizationToken;

        if (!isEmpty(authorization)) {
            reply.header('authorization', authorization)
        }
        reply.header('Cache-Control', `public, max-age=${maxAge}`);
        return next(null, JSON.stringify(newPayload));
    } catch (error) {
        return next(null, JSON.stringify(error));
    }
};

module.exports = makeResponse;
