import React from "react";
import classes from "./MessageSender.module.css";

const MessageSender = (props) =>{
    return(
        <div className={classes.box}>
            <input type="text" className={classes.messageInput}/>
            <input type="button" value="Send" className={classes.messageSendButton}/>
        </div>
    )
};

export default MessageSender;