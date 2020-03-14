import {SET_CURRENT_USER} from '../constantes/actions/appConstantes';

const initialState = {
    user: {},
    repository: 'F:\\www\\mindgit',
    branch: null,
};

const reducer = (state = initialState, payload) => {
    switch (payload.type) {
        case SET_CURRENT_USER:
            return {...state, user: payload.data};
        default:
            return state;
    }
};

export default reducer;
