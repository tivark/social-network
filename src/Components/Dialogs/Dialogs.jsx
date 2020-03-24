import React from "react";
import classes from "./Dialogs.module.css";
import DialogsList from "./DialogList/DialogList";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <DialogsList dialogs={props.state.dialogs}/>
            <Messages  messages={props.state.messages}
                       currentMessage={props.state.currentMessage}
                       dispatch={props.dispatch}/>
        </div>
    );
}

export default Dialogs;