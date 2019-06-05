export default (state = [], {type, payload}) => {
    switch (type) {
        case 'SECTION_CREATE':
            return [...state, payload];
        case 'SECTION_UPDATE':
            return
        case 'SECTION_DELETE':
            return
        default:
            return state;
    }
};