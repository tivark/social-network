import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let incomingData = {
    dialogsData: [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Sveta'},
    ],
    messagesData: [
        {id: 1, message: 'message 1'},
        {id: 2, message: 'Valera'},
        {id: 3, message: 'Yo Yo '},
    ],
    postData: [
        {id: 1, post: 'message 1', likes: 5},
        {id: 2, post: 'Valera', likes: 10},
        {id: 3, post: 'Yo Yo', likes: 15},
    ]
}

ReactDOM.render(<App inData = {incomingData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
