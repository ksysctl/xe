import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App
        header="Exchange rate app."
    />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
