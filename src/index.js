import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import 'core-js/fn/object/assign';
import API from './flux/API';
API.getAllItems();
// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
