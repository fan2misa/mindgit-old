
import LocalStorageService from '../../services/LocalStorageService';
import GitService from '../../services/GitService';

import {LOCALSTORAGE_DIRECTORY} from '../../constantes/services/LocalStorageConstante';
import {statusAction} from "./status";
import {SET_GIT_STATUS} from "../../constantes/actions/gitConstantes";

export const stageAction = () => {
    return (dispatch) => {
        GitService.stage(LocalStorageService.get(LOCALSTORAGE_DIRECTORY), '*')
            .then(status => dispatch({
                type: SET_GIT_STATUS,
                data: status
            }));
    }
};

export const unstageAction = () => {
    return (dispatch) => {
        GitService.unstage(LocalStorageService.get(LOCALSTORAGE_DIRECTORY), 'mixed')
            .then(status => dispatch({
                type: SET_GIT_STATUS,
                data: status
            }));
    }
};
