
import { combineReducers } from 'redux';

import appReducer from './reducers/appReducer';
import loadReducer from './reducers/loadReducer';
import modalReducer from './reducers/modalReducer';
import gitReducer from './reducers/gitReducer';

export default combineReducers({
    app: appReducer,
    load: loadReducer,
    git: gitReducer,
    modal: modalReducer
});
