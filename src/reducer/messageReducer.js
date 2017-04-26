const INITIAL_STATE = {
    msg: '',
    result: '',
    alpha: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'MSG_CHANGED':
            return { ...state, msg: action.payload };
            break;
        case 'RESULT_CHANGED':
            console.log('reducer', action.payload)
            return { ...state, result: action.payload };
            break;
        case 'CLEAR':
            return { ...state, msg: '' };
            break;
        default:
            return state;
    }
}