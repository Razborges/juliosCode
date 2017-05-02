export const msgChanged = e => ({
    type: 'MSG_CHANGED',
    payload: e.target.value
});

export const criptChanged = payload => ({
    type: 'CRIPT',
    payload
});