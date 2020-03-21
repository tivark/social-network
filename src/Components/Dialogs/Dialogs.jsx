import React from "react";
import classes from "./Dialogs.module.css";
import DialogsList from "./DialogList/DialogList";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Sveta'},
    ];
    let messagesData = [
        {id: 1, message: 'message 1'},
        {id: 2, message: 'Valera'},
        {id: 3, message: 'Yo Yo '},
    ];
    return (
        <div className={classes.dialogs}>
            <DialogsList dialogs={dialogsData}/>
            <Messages  messages={messagesData}/>
        </div>
    );
}

export default Dialogs;