
import LocalStorageService from '../../services/LocalStorageService';
import GitService from '../../services/GitService';

import {LOCALSTORAGE_DIRECTORY} from '../../constantes/services/LocalStorageConstante';
import {SET_GIT_STATUS} from "../../constantes/actions/gitConstantes";
import {statusAction} from "./status";

export const fetchAction = () => {
    return (dispatch) => {
        if (GitService.isRepository(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))) {
            dispatch(statusAction(LocalStorageService.get(LOCALSTORAGE_DIRECTORY)));
        }
    }
};
