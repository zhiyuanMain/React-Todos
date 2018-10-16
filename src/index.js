import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const initTodoList = require('./mocks/todo.json');

const store = createStore(rootReducer, {
    todos: initTodoList,
    visibilityFilter: 'SHOW_ALL'
});

store.subscribe(() => {
    console.log(store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
