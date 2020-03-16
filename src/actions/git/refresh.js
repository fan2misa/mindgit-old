
import LocalStorageService from '../../services/LocalStorageService';
import GitService from '../../services/GitService';

import {LOCALSTORAGE_DIRECTORY} from '../../constantes/services/LocalStorageConstante';
import {SET_GIT_STATUS} from "../../constantes/actions/gitConstantes";

export const refreshAction = () => {
    return (dispatch) => {
        if (GitService.isRepository(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))) {
            GitService.status(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))
                .then(status => {
                    dispatch({
                        type: SET_GIT_STATUS,
                        data: status
                    });
                });
        }
    }
};
