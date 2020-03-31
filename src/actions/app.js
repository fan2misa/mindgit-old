import {refreshAction} from "./git/refresh";
import {SET_LOAD} from "../constantes/actions/loadConstantes";
import {openMainModalAction} from "./modal/openModal";
import React from "react";

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

export const alertErrorAction = (error) => {
    return (dispatch) => {
        let body = <pre>{error}</pre>;
        dispatch(openMainModalAction('modal-lg', 'Git Error', body));
    }
}