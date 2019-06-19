const updateMapper = (payload) => {
    const { user_id = '', ...remaining } = payload;

    let query = 'update user_details set ';
    const keys = Object.keys(remaining);
    const values = keys.map(key => {
        return `${key} = '${payload[key]}'`;
    });
    query += values.join(',') + ` where user_id = '${user_id}';`;
    return {
        query,
        success: true
    };
}

module.exports = updateMapper;