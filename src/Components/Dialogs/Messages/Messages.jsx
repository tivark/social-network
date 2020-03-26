import React from "react";
import classes from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem"
import MessageSenderContainer from "./MessageSender/MessageSenderContainer";

const Messages = (props) => {

    let messagesElements = props.messages.map(el => (<MessageItem state={el} key={el.id}/>));
    return (
        <div className={classes.box}>
            <div className={classes.messagesItems}>
                {messagesElements}
            </div>
            <MessageSenderContainer store={props.store}/>
        </div>
    )
};

export default Messages;