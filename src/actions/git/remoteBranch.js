
import LocalStorageService from '../../services/LocalStorageService';
import GitService from '../../services/GitService';

import {LOCALSTORAGE_DIRECTORY} from '../../constantes/services/LocalStorageConstante';
import {INIT_REMOTE_BRANCH} from "../../constantes/actions/gitConstantes";

export const remoteBranchAction = () => {
    return (dispatch) => {
        if (GitService.isRepository(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))) {
            GitService.findRemoteBranch(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))
                .then(branchSummary => {
                    dispatch({
                        type: INIT_REMOTE_BRANCH,
                        data: branchSummary.branches
                    });
                });
        }
    }
};
