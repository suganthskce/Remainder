/**
 * This config file is to fetch the access control configuration for each role and user
 */


const getAclConfig = async () => {

}

setConfigInterval = () => {
    setInterval(() => {
        getAclConfig();
    }, 120000);
}
saveUserGroup = (formOptionsConfig) => {
    global.formOptions = global.formOptions || {};
    const { documents = [] } = formOptionsConfig;
    documents.map((optionConfig) => {
        const { key = "", data = [], enabled = true } = optionConfig;
        if (enabled) {
            global.formOptions[key] = data['data'];
        }
    });
}

const initialize = () => {
    // getAclConfig();
    // setConfigInterval();
}

module.exports = { initialize };
