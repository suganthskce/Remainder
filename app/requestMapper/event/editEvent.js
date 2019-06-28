const editEventMapper = (payload, decoded) => {
    const { event_id = '', ...remaining } = payload;
    const { user_id = '' } = decoded;
    const keys = Object.keys(remaining);
    const updateData = keys.map(key => {
        return `${key}='${key !== 'addInfo' ? payload[key] : JSON.stringify(payload[key])}'`;
    });
    const query = `update event_${user_id} set ${updateData.join(',')} where event_id=${event_id};`;
    return {
        query,
        success: true
    };
}

module.exports = editEventMapper;