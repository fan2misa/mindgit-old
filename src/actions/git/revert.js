
import LocalStorageService from '../../services/LocalStorageService';
import GitService from '../../services/GitService';

import {LOCALSTORAGE_DIRECTORY} from '../../constantes/services/LocalStorageConstante';
import {alertErrorAction, startLoadAction, stopLoadAction} from "../app";
import {refreshAction} from "./refresh";
import {closeMainModalAction, openMainModalAction} from "../modal/openModal";
import React from "react";

export const revertAction = (commit) => {
    return (dispatch) => {
        if (GitService.isRepository(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))) {
            GitService.revert(LocalStorageService.get(LOCALSTORAGE_DIRECTORY), commit)
                .then(() => dispatch(refreshAction()))
                .catch(error => dispatch(alertErrorAction(error)));
        }
    }
};
