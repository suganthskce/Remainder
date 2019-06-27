const fetchEvent = (params) => {
    const { id = '', userId = '' } = params;
    let query = `select * from event_${userId} where event_id=${id};`;
    return {
        query,
        success: true
    };
}

module.exports = fetchEvent;