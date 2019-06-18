const registerMapper = (payload) => {
    const { fname = '', lname = '', mobile = '', username = '', password = '', dob = '', gender = '' } = payload;
    const keys = Object.keys(payload);
    const values = keys.map(key => {
        return payload[key];
    });
    const query = `insert into user_details(${keys.join(',')}) values ('${values.join("','")}');`;
    return {
        query,
        success: true
    };
}

module.exports = registerMapper;