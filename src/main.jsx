import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { remote } from 'electron';
import $ from 'jquery';

import './../assets/scss/main.scss';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle';

import App from "./App";
import createStore from './store';
import {initializeAction} from "./actions/initialize";
import {refreshAction} from "./actions/git/refresh";

import ApplicationMenuTemplate from "./menu/ApplicationMenuTemplate";
import {SET_INFO_MODAL} from "./constantes/actions/modalConstantes";

let store = createStore();

store.dispatch(initializeAction());

$('[data-toggle="tooltip"]').tooltip();

remote.app.on('browser-window-focus', () => store.dispatch(refreshAction()));

let menu = new ApplicationMenuTemplate(store.dispatch);
remote.Menu.setApplicationMenu(remote.Menu.buildFromTemplate(menu.get()));

$(document).on('hidden.bs.modal', '#main-modal', function (e) {
    store.dispatch({
        type: SET_INFO_MODAL,
        data: {
            type: null,
            title: '',
            body: ''
        }
    });
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));