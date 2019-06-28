const fetchEvent = (params, decoded) => {
    const { id = '' } = params;
    const { user_id = '' } = decoded;
    let query = `select * from event_${user_id} where event_id=${id};`;
    return {
        query,
        success: true
    };
}

module.exports = fetchEvent;