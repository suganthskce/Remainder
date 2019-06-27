const dekorator = (data) => {
    const formattedData = data.map(event => {
        const { event_id = '', name = '', deleted = '', description = '',
            evtData = '', addInfo = '', created_at = '' } = event;
        return {
            event_id,
            name,
            description,
            evtData,
            deleted,
            addInfo: JSON.parse(addInfo),
            created_at
        }
    });
    return { events: formattedData };
}

module.exports = dekorator;