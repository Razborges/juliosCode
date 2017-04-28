const INITIAL_STATE = {
    msg: '',
    cript: '',
    alpha: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
}

export default (state = INITIAL_STATE, action) => {
    console.log('dentro do reducer ==>', action.type, action.payload);
    switch(action.type) {
        case 'MSG_CHANGED':
            return { ...state, msg: action.payload };
            break;
        case 'CRIPT_CHANGED':
            console.log('reducer CRIPT ==>', action.payload)
            return { ...state, cript: action.payload };
            break;
        case 'CLEAR':
            return { ...state, msg: '' };
            break;
        default:
            return state;
    }
}