import React from "react";
import classes from "./MessageSender.module.css";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/dialogsReducer";

const MessageSender = (props) => {

    let newMessageArea = React.createRef();

    const changeInputText = (e) => {
        let inputText = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(inputText));
    };

    const addNewMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    return (
        <div className={classes.box}>
            <textarea ref={newMessageArea} rows="5" className={classes.messageInput} value={props.currentMessage}
                      onChange={changeInputText}/>
            <button className={classes.messageSendButton} onClick={addNewMessage}>Send</button>
        </div>
    )
};

export default MessageSender;