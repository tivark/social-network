import React from "react";
import classes from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem"

const Messages = (props) =>{
    return(
        <div className={classes.messages}>
            <MessageItem message="Hi"/>
            <MessageItem message="Hey"/>
        </div>
    )
}
export default Messages;