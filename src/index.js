import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {addNewMessage, setNewMessageText, setNewPostText, subscribe} from './redux/state';
import {addPost} from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         setNewPostText={setNewPostText}
                         addNewMessage={addNewMessage}
                         setNewMessageText={setNewMessageText}/>, document.getElementById('root'));
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

serviceWorker.unregister();
