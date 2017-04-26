export const msgChanged = e => ({
    type: 'MSG_CHANGED',
    payload: e.target.value
});

export const resultChanged = resultMsg => ({
    type: 'RESULT_CHANGED',
    payload: resultMsg
});

export const clear = () => ({ type: 'CLEAR' });