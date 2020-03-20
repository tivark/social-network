import React from "react";
import classes from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem"

const Messages = (props) =>{
    let messagesData = [
        {id: 1, message: 'message 1'},
        {id: 2, message: 'Valera'},
        {id: 3, message: 'Yo Yo '},
    ];
    let messagesElements = messagesData.map( m => (<MessageItem message={m.message}/>) );
    return(
        <div className={classes.messages}>
            {messagesElements}
        </div>
    )
}
export default Messages;