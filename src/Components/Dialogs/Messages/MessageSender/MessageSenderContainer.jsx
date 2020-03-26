import React from "react";
import classes from "./MessageSender.module.css";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/dialogsReducer";
import MessageSender from "./MessageSender";
import {connect} from "react-redux";

/*const MessageSenderContainer = (props) => {

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
};*/

let mapStateToProps = (state) => {
    return{
        currentMessage: state.dialogsPage.currentMessage
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        addMessage: () => {dispatch(addMessageActionCreator())},
        updateInputText: (inputText) => {dispatch(updateNewMessageTextActionCreator(inputText))}
    }
};

const MessageSenderContainer = connect(mapStateToProps, mapDispatchToProps)(MessageSender);

export default MessageSenderContainer;