import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={store.addPost.bind(store)}
                         setNewPostText={store.setNewPostText.bind(store)}
                         addNewMessage={store.addNewMessage.bind(store)}
                         setNewMessageText={store.setNewMessageText.bind(store)}/>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
