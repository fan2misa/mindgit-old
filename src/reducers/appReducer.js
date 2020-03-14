import {SET_CURRENT_USER, SET_CURRENT_DIRECTORY} from '../constantes/actions/appConstantes';

const initialState = {
    user: {},
    directory: 'F:\\www\\mindgit',
    branch: null,
};

const reducer = (state = initialState, payload) => {
    switch (payload.type) {
        case SET_CURRENT_USER:
            return {...state, user: payload.data};
        case SET_CURRENT_DIRECTORY:
            return {...state, directory: payload.data};
        default:
            return state;
    }
};

export default reducer;
