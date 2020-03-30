
import { combineReducers } from 'redux';

import appReducer from './reducers/appReducer';
import modalReducer from './reducers/modalReducer';
import gitReducer from './reducers/gitReducer';

export default combineReducers({
    app: appReducer,
    git: gitReducer,
    modal: modalReducer
});
