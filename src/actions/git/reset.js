
import LocalStorageService from '../../services/LocalStorageService';
import GitService from '../../services/GitService';

import {LOCALSTORAGE_DIRECTORY} from '../../constantes/services/LocalStorageConstante';
import {startLoadAction, stopLoadAction} from "../app";
import {refreshAction} from "./refresh";

export const resetAction = (mode, options) => {
    return (dispatch) => {
        if (GitService.isRepository(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))) {
            GitService.reset(LocalStorageService.get(LOCALSTORAGE_DIRECTORY), mode, options)
                .then(() => dispatch(refreshAction()));
        }
    }
};
