const { isEmpty } = require('lodash');

const dekorator = (data) => {
    const formattedData = data.map(userDetail => {
        const { user_id = '', fname = '', lname = '', mobile = '', username = '',
            dob = '', gender = '', created_at = '', email = '' } = userDetail;
        return {
            user_id,
            fname,
            lname,
            email,
            mobile,
            username,
            dob,
            gender,
            created_at
        }
    });
    return { userInfo: formattedData[0], success: !isEmpty(formattedData) };
}

module.exports = dekorator;