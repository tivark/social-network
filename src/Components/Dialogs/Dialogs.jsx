import React from "react";
import classes from "./Dialogs.module.css";
import DialogsList from "./DialogList/DialogList";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <DialogsList store={props.store}/>
            <Messages  store={props.store}/>
        </div>
    );
}

export default Dialogs;