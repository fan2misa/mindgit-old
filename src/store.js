import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export default (preloadedState) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
}