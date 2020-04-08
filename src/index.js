import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// scss for global 
import './Index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
