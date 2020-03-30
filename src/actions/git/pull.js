
import LocalStorageService from '../../services/LocalStorageService';
import GitService from '../../services/GitService';

import {LOCALSTORAGE_DIRECTORY} from '../../constantes/services/LocalStorageConstante';
import {startLoadAction, stopLoadAction} from "../app";
import {refreshAction} from "./refresh";

export const pullAction = (currentBranch) => {
    return (dispatch) => {
        if (GitService.isRepository(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))) {
            dispatch(startLoadAction('pull'));
            GitService.pull(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))
                .then(data => dispatch(refreshAction()))
                .finally(() => dispatch(stopLoadAction('pull')));
        }
    }
};
