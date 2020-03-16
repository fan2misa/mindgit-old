
import LocalStorageService from '../../services/LocalStorageService';
import GitService from '../../services/GitService';

import {LOCALSTORAGE_DIRECTORY} from '../../constantes/services/LocalStorageConstante';
import {statusAction} from "./status";
import {remoteBranchAction} from "./remoteBranch";
import {localBranchAction} from "./localBranch";
import {logAction} from "./log";

export const refreshAction = () => {
    return (dispatch) => {
        if (GitService.isRepository(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))) {
            dispatch(statusAction());
            dispatch(localBranchAction());
            dispatch(remoteBranchAction());
            dispatch(logAction());
        }
    }
};
