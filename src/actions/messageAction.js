export const msgChanged = e => ({
    type: 'MSG_CHANGED',
    payload: e.target.value
});

export const criptChanged = function(payload) {
    console.log('dentro da action ==>', payload);
    return {
        type: 'CRIPT_CHANGED',
        payload
    };
};

/*
payload => ({
    type: 'RESULT_CHANGED',
    payload
});
*/

export const clear = () => ({ type: 'CLEAR' });