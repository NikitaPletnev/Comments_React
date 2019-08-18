import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Запуск основного скрипта
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
