import React from "react";
import classes from "./MessageSender.module.css";

const MessageSender = (props) => {

    let newMessageArea = React.createRef();

    const changeInputText = () => {
        let inputText = newMessageArea.current.value;
        let action = {
            type: 'SET-MESSAGE-TEXT',
            newText: inputText
        }
        props.dispatch(action);
    };

    const addNewMessage = () => {
        let action = {
            type: 'ADD-MESSAGE'
        }
        props.dispatch(action);
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