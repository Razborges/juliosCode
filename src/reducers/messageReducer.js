const INITIAL_STATE = {
    msg: '',
    cript: '',
    alpha: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'MSG_CHANGED':
            return { ...state, msg: action.payload };
        case 'CLEAR':
            return { ...state, msg: '' };
        case 'CRIPT':
            return { ...state, cript: action.payload, msg: '' };
        default:
            return state;
    }
}