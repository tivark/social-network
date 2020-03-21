import React from "react";
import classes from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem"

const Messages = (props) =>{

    let messagesElements = props.messages.map( m => (<MessageItem message={m.message}/>) );
    return(
        <div className={classes.messages}>
            {messagesElements}
        </div>
    )
}
export default Messages;