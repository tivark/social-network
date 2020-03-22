import React from "react";
import classes from "./MessageSender.module.css";

const MessageSender = (props) =>{

    let newMessageArea = React.createRef();

    function sendMessage() {
        let text = newMessageArea.current.value;
        console.log(text);
    }

    return(
        <div className={classes.box}>
            <textarea ref={newMessageArea} rows="5" className={classes.messageInput}></textarea>
            <button className={classes.messageSendButton} onClick={sendMessage}>Send</button>
        </div>
    )
};

export default MessageSender;