const registerModal = {
    fields: ["firstName", "lastName", "mobile", "email", "username", "password", "dob", "gender"],
    fieldsData: {
        "firstName": {
            path: "fn",
            validations: [
                {
                    "id": "required",
                }
            ],
            keyToSend: "fname"
        }
    }
};

module.exports = registerModal;