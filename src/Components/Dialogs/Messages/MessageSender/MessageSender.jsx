import React from "react";
import classes from "./MessageSender.module.css";

const MessageSender = (props) => {

    let newMessageArea = React.createRef();

    const onChangeInputText = (e) => {
        let inputText = e.target.value;
        props.updateInputText(inputText);
    };

    const onAddNewMessage = () => {
        props.addMessage();
    };

    return (
        <div className={classes.box}>
            <textarea ref={newMessageArea} rows="5" className={classes.messageInput} value={props.currentMessage}
                      onChange={onChangeInputText}/>
            <button className={classes.messageSendButton} onClick={onAddNewMessage}>Send</button>
        </div>
    )
};

export default MessageSender;