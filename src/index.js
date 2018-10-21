import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './router.js';
import registerServiceWorker, { unregister } from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
unregister();
