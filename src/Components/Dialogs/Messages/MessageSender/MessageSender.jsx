import React from "react";
import classes from "./MessageSender.module.css";

const MessageSender = (props) => {

    let newMessageArea = React.createRef();

    const changeInputText = () => {
        let newText = newMessageArea.current.value;
        props.setNewMessageText(newText);
    }
    return (
        <div className={classes.box}>
            <textarea ref={newMessageArea} rows="5" className={classes.messageInput} value={props.currentMessage}
                      onChange={changeInputText}/>
            <button className={classes.messageSendButton} onClick={props.addNewMessage}>Send</button>
        </div>
    )
};

export default MessageSender;