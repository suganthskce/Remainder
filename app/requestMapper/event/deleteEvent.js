const deleteEventMapper = (params, decoded) => {
    const { id = '' } = params;
    const { user_id = '' } = decoded;
    const query = `update event_${user_id} set deleted=1 where event_id=${id};`;
    return {
        query,
        success: true
    };
}

module.exports = deleteEventMapper;