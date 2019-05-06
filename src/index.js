import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import usersStat from './reducers';

const store = createStore(usersStat);
store.subscribe(()=>{ // for testing redux
  console.log('store changed to',store.getState())
})

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)