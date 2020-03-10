import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import 'typeface-roboto';
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from "./App";
import createStore from './store';
import theme from './theme';

import io from 'socket.io-client';
const socket = io('http://localhost:3000');

let store = createStore();

ReactDOM.render(<Provider store={store}><MuiThemeProvider theme={theme}><App /></MuiThemeProvider></Provider>, document.getElementById('app'));