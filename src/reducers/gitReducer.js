import {
    INIT_LOCAL_BRANCH,
    INIT_REMOTE_BRANCH,
    SET_GIT_COMMITS,
    SET_GIT_STATUS
} from '../constantes/actions/gitConstantes';

const initialState = {
    status: null,
    branchLocal: [],
    branchRemote: [],
    commits: [],
};

const reducer = (state = initialState, payload) => {
    switch (payload.type) {
        case SET_GIT_STATUS:
            return {...state, status: payload.data};
        case SET_GIT_COMMITS:
            return {...state, commits: payload.data};
        case INIT_LOCAL_BRANCH:
            return {...state, branchLocal: payload.data};
        case INIT_REMOTE_BRANCH:
            return {...state, branchRemote: payload.data};
        default:
            return state;
    }
};

export default reducer;
SET_GIT_COMMITS