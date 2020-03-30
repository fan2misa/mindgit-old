import {
    CLEAR_GIT_COMMITS,
    INIT_LOCAL_BRANCH,
    INIT_REMOTE_BRANCH,
    SET_GIT_COMMITS,
    SET_GIT_STATUS
} from '../constantes/actions/gitConstantes';

const initialState = {
    status: null,
    current: null,
    branchLocal: {},
    branchRemote: [],
    commits: [],
};

const reducer = (state = initialState, payload) => {
    switch (payload.type) {
        case SET_GIT_STATUS:
            return {...state, status: payload.data};
        case CLEAR_GIT_COMMITS:
            return {...state, commits: []};
        case SET_GIT_COMMITS:
            return {...state, commits: payload.data};
        case INIT_LOCAL_BRANCH:
            let current = Object.keys(payload.data).map(key => payload.data[key]).filter(branch => branch.current);
            current = current.length ? current[0] : null;
            return {...state, branchLocal: payload.data, current: current};
        case INIT_REMOTE_BRANCH:
            return {...state, branchRemote: payload.data};
        default:
            return state;
    }
};

export default reducer;
