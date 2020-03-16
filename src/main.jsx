import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import './../assets/scss/main.scss';
import './../node_modules/bootstrap/dist/js/bootstrap';

import App from "./App";
import createStore from './store';
import {initializeAction} from "./actions/initialize";

let store = createStore();

store.dispatch(initializeAction());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));