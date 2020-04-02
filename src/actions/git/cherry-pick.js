
import LocalStorageService from '../../services/LocalStorageService';
import GitService from '../../services/GitService';

import {LOCALSTORAGE_DIRECTORY} from '../../constantes/services/LocalStorageConstante';
import {refreshAction} from "./refresh";

export const cherryPickAction = (commit) => {
    return (dispatch) => {
        if (GitService.isRepository(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))) {
            GitService.cherryPick(LocalStorageService.get(LOCALSTORAGE_DIRECTORY), commit)
                .then(stdout => dispatch(refreshAction()));
        }
    }
};
