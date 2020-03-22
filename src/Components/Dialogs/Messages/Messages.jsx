import React from "react";
import classes from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem"
import MessageSender from "./MessageSender/MessageSender";

const Messages = (props) => {

    let messagesElements = props.messages.map(m => (<MessageItem message={m.message}/>));
    return (
        <div className={classes.box}>
            <div className={classes.messagesItems}>
                {messagesElements}
            </div>
            <MessageSender/>
        </div>
    )
}
export default Messages;