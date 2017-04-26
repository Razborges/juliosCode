const INITIAL_STATE = { msg: ''}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'MSG_CHANGED':
            return { ...state, msg: action.payload };
        default:
            return state;
    }
}