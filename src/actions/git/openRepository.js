
import electron from 'electron';
import $ from 'jquery';

import {SET_CURRENT_DIRECTORY} from './../../constantes/actions/appConstantes';
import {LOCALSTORAGE_DIRECTORY} from "../../constantes/services/LocalStorageConstante";
import {SET_GIT_COMMITS} from "../../constantes/actions/gitConstantes";

import LocalStorageService from "../../services/LocalStorageService";
import {refreshAction} from "./refresh";

export const openRepositoryModalAction = () => {
    return (dispatch) => {
        $('#repository-management-modal').modal('show');
    }
};

export const closeRepositoryModalAction = () => {
    return (dispatch) => {
        $('#repository-management-modal').modal('hide');
    }
};

export const openRepositoryAction = () => {
    return (dispatch) => {
        const { dialog } = electron.remote;

        dialog.showOpenDialog({
            properties: ['openDirectory']
        }).then(result => {
            if (result.filePaths.length) {

                dispatch({
                    type: SET_GIT_COMMITS,
                    data: []
                });

                let directory = result.filePaths[0];

                LocalStorageService.set(LOCALSTORAGE_DIRECTORY, directory);

                dispatch({
                    type: SET_CURRENT_DIRECTORY,
                    data: directory
                });

                dispatch(closeRepositoryModalAction());
                dispatch(refreshAction());
            }
        });
    }
};