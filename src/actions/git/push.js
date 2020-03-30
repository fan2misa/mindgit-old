import React from "react";

import LocalStorageService from '../../services/LocalStorageService';
import GitService from '../../services/GitService';

import {LOCALSTORAGE_DIRECTORY} from '../../constantes/services/LocalStorageConstante';
import {refreshAction} from "./refresh";
import {closeMainModalAction, openMainModalAction} from "../modal/openModal";

export const pushAction = (currentBranch, options) => {
    return (dispatch) => {
        if (GitService.isRepository(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))) {
            GitService.getRemotes(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))
                .then(data => {
                    if (data.length === 1) {
                        GitService.push(LocalStorageService.get(LOCALSTORAGE_DIRECTORY), data[0].name, currentBranch, options || [])
                            .then(() => dispatch(refreshAction()))
                            .catch(error => {
                                let body = <pre>{error}</pre>;
                                let footer = <button className="btn btn-danger" onClick={() => {
                                    dispatch(pushAction(currentBranch, ['--force']));
                                    dispatch(closeMainModalAction());
                                }}>
                                    Force Push
                                </button>;
                                dispatch(openMainModalAction('modal-lg', 'Git Error', body, footer));
                            });
                    }
                });
        }
    }
};
