
import { combineReducers } from 'redux';

import appReducer from './reducers/appReducer';
import gitReducer from './reducers/gitReducer';

export default combineReducers({
    app: appReducer,
    git: gitReducer
});
