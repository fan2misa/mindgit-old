
import LocalStorageService from '../../services/LocalStorageService';
import GitService from '../../services/GitService';

import {LOCALSTORAGE_DIRECTORY} from '../../constantes/services/LocalStorageConstante';
import {refreshAction} from "./refresh";

export const commitAction = (state) => {
    return (dispatch) => {
        if (GitService.isRepository(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))) {
            GitService.commit(LocalStorageService.get(LOCALSTORAGE_DIRECTORY), state)
                .then(status => {
                    dispatch(refreshAction());
                });
        }
    }
};
