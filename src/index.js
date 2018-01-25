import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import TodosPage from './todos/TodosPage';

ReactDOM.render(<TodosPage/>, document.getElementById('root'));
registerServiceWorker();
