import React from "react";
import classes from "./MessageSender.module.css";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/dialogsReducer";
import MessageSender from "./MessageSender";

const MessageSenderContainer = (props) => {

    let state = props.store.getState();
    let newMessageText = state.dialogsPage.currentMessage;

    const updateInputText = (inputText) => {
        let newAction = updateNewMessageTextActionCreator(inputText);
        props.store.dispatch(newAction);
    };

    const addMessage = () => {
        let newAction = addMessageActionCreator();
        props.store.dispatch(newAction);
    };

    return (
        <MessageSender updateInputText={updateInputText} addMessage={addMessage} currentMessage={newMessageText}/>
    )
};

export default MessageSenderContainer;