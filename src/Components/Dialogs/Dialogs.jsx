import React from "react";
import classes from "./Dialogs.module.css";
import DialogsListContainer from "./DialogList/DialogsListContainer";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <DialogsListContainer />
            <MessagesContainer />
        </div>
    );
}

export default Dialogs;