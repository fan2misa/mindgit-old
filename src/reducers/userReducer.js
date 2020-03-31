import {SET_CURRENT_USER_EMAIL, SET_CURRENT_USER_NAME} from '../constantes/actions/appConstantes';

const initialState = {
    name: null,
    email: null
};

const reducer = (state = initialState, payload) => {
    switch (payload.type) {
        case SET_CURRENT_USER_NAME:
            return {...state, name: payload.data};
        case SET_CURRENT_USER_EMAIL:
            return {...state, email: payload.data};
        default:
            return state;
    }
};

export default reducer;
