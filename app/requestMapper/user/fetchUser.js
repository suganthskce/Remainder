const fetchUser = (id) => {
    let query = `select * from user_details where user_id=${id};`;
    return {
        query,
        success: true
    };
}

module.exports = fetchUser;