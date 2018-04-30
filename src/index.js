import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter ,Router,Route,Link,Switch} from 'react-router-dom';




ReactDOM.render(
   <App/>
    , document.getElementById('root'));
registerServiceWorker();
