import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./Components/Router"
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/semantic-ui-css/semantic.min.css'

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
