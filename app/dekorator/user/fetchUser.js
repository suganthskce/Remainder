const dekorator = (data) => {
    const formattedData = data.map(userDetail => {
        const { user_id = '', fname = '', lname = '', mobile = '', username = '',
            dob = '', gender = '', created_at = '' } = userDetail;
        return {
            user_id,
            fname,
            lname,
            mobile,
            username,
            dob,
            gender,
            created_at
        }
    });
    return { user: formattedData };
}

module.exports = dekorator;