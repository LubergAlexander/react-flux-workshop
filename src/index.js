import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import {Provider} from 'react-redux';
import 'core-js/fn/object/assign';
import store from './stores/store';
// Render the main component into the dom
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
