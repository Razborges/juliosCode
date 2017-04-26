const INITIAL_STATE = { step: 0 };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'INC':
            return { ...state, step: state.step + 1 };
            break;
        case 'DEC':
            return { ...state, step: state.step - 1 };
            break;
        case 'CLEAR':
            return { ...state, step: 0 };
            break;
        default:
            return state;
    }
}