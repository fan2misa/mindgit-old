import {refreshAction} from "./git/refresh";
import {SET_LOAD} from "../constantes/actions/loadConstantes";

export const startLoadAction = (type) => {
    let data = {};
    data[type] = true;
    return (dispatch) => {
        dispatch({
            type: SET_LOAD,
            data: data
        });
    }
};

export const stopLoadAction = (type) => {
    let data = {};
    data[type] = false;
    return (dispatch) => {
        dispatch({
            type: SET_LOAD,
            data: data
        });
    }
};
