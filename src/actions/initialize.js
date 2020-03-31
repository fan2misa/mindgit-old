import {refreshAction} from "./git/refresh";
import GitService from "../services/GitService";
import LocalStorageService from "../services/LocalStorageService";
import {LOCALSTORAGE_DIRECTORY} from "../constantes/services/LocalStorageConstante";
import {SET_CURRENT_USER_EMAIL, SET_CURRENT_USER_NAME} from "../constantes/actions/appConstantes";

export const initializeAction = () => {
    return (dispatch) => {
        GitService.getUserName(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))
            .then(data => dispatch({type: SET_CURRENT_USER_NAME, data: data}));

        GitService.getUserEmail(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))
            .then(data => dispatch({type: SET_CURRENT_USER_EMAIL, data: data}));

        dispatch(refreshAction());
    }
};
