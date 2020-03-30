
import {SET_LOAD} from '../constantes/actions/loadConstantes';

const initialState = {
    pull: false,
    push: false
};

const reducer = (state = initialState, payload) => {
    return payload.type === SET_LOAD
        ? {...state, ...payload.data}
        : state;
};

export default reducer;
