const addEventMapper = (payload) => {
    const { user_id = '', ...remaining } = payload;
    const keys = Object.keys(remaining);
    const values = keys.map(key => {
        return key !== 'addInfo' ? payload[key] : JSON.stringify(payload[key]);
    });
    const query = `insert into event_${user_id}(${keys.join(',')}) values ('${values.join("','")}');`;
    return {
        query,
        success: true
    };
}

module.exports = addEventMapper;