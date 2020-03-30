
import LocalStorageService from '../../services/LocalStorageService';
import GitService from '../../services/GitService';

import {LOCALSTORAGE_DIRECTORY} from '../../constantes/services/LocalStorageConstante';
import {SET_GIT_COMMITS, CLEAR_GIT_COMMITS} from "../../constantes/actions/gitConstantes";
import {startLoadAction, stopLoadAction} from "../app";

export const logAction = () => {
    return (dispatch) => {
        if (GitService.isRepository(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))) {
            dispatch(startLoadAction('logs'));

            GitService.log(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))
                .then(commits => {
                    dispatch({type: CLEAR_GIT_COMMITS});
                    dispatch({
                        type: SET_GIT_COMMITS,
                        data: commits
                    });
                })
                .finally(() => dispatch(stopLoadAction('logs')));
        }
    }
};
