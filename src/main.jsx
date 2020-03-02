import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import 'typeface-roboto';

import App from "./App";
import createStore from './store';

let store = createStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));