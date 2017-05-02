import { combineReducers } from 'redux';

import counterReducer from '../reducers/counterReducer';
import messageReducer from '../reducers/messageReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    message: messageReducer
});

export default rootReducer;