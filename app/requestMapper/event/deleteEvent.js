const deleteEventMapper = (params) => {
    const { id = '', userId = '' } = params;
    const query = `update event_${userId} set deleted=1 where event_id=${id};`;
    return {
        query,
        success: true
    };
}

module.exports = deleteEventMapper;