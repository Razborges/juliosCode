import { combineReducers } from 'redux';

import counterReducer from '../reducer/counterReducer';
import messageReducer from '../reducer/messageReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    message: messageReducer
});

export default rootReducer;