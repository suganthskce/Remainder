const { isEmpty } = require("lodash");

const listEventMapper = (payload, decoded) => {
    const { eventIds = [] } = payload;
    const { user_id = '' } = decoded;
    let query = ``;
    if (isEmpty(eventIds)) {
        query = `select * from event_${user_id};`;
    } else {
        query = `select * from event_${user_id} where event_id IN (${eventIds.join(',')})`
    }
    return {
        query,
        success: true
    };
}

module.exports = listEventMapper;