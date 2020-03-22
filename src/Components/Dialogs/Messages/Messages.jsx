import React from "react";
import classes from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem"
import MessageSender from "./MessageSender/MessageSender";

const Messages = (props) => {

    let messagesElements = props.messages.map(el => (<MessageItem state={el}/>));
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