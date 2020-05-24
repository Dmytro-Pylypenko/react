import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts= [
  { id: 0, message: 'Hi, how are you', likesCount: 12 },
  { id: 1, message: 'It\'s my first post', likesCount: 24 },
  { id: 2, message: 'Yo', likesCount: 22 },
]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
