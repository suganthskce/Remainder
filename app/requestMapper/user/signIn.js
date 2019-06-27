const signInMapper = (payload) => {
    const { username = '', password = '' } = payload;
    const query = `select * from user_details where (mobile='${username}' OR username='${username}' OR email='${username}') AND password='${password}';`;
    return {
        query,
        success: true
    };
}

module.exports = signInMapper;