import {SET_INFO_MODAL} from '../constantes/actions/modalConstantes';

const initialState = {
    type: null,
    title: '',
    body: '',
};

const reducer = (state = initialState, payload) => {
    switch (payload.type) {
        case SET_INFO_MODAL:
            return {...state, ...payload.data};
        default:
            return state;
    }
};

export default reducer;
