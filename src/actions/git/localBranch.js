
import LocalStorageService from '../../services/LocalStorageService';
import GitService from '../../services/GitService';

import {LOCALSTORAGE_DIRECTORY} from '../../constantes/services/LocalStorageConstante';
import {INIT_LOCAL_BRANCH} from "../../constantes/actions/gitConstantes";

export const localBranchAction = () => {
    return (dispatch) => {
        if (GitService.isRepository(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))) {
            GitService.findLocalBranch(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))
                .then(branchSummary => {
                    dispatch({
                        type: INIT_LOCAL_BRANCH,
                        data: branchSummary.branches
                    });
                });
        }
    }
};
