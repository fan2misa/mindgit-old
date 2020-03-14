import {SET_GIT_STATUS} from '../constantes/actions/gitConstantes';

const initialState = {
    branches: {
        local: [],
        remote: [],
        status: null
    }
};

const reducer = (state = initialState, payload) => {
    console.log();
    switch (payload.type) {
        case SET_GIT_STATUS:
            return {...state, status: payload.data};
        default:
            return state;
    }
};

export default reducer;
