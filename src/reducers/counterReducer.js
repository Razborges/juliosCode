const INITIAL_STATE = { step: 0 };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'INC':
            return { ...state, step: action.payload };
        case 'DEC':
            return { ...state, step: action.payload };
        case 'CRIPT':
            return { ...state, step: 0 };
        default:
            return state;
    }
}