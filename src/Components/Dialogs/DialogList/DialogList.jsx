import React from "react";
import classes from "./DialogsList.module.css";
import DialogItem from "./DialogItem/DialogItem";

const DialogsList = (props) =>{
    let state = props.store.getState();
    let dialogsElements = state.dialogsPage.dialogs.map( item => (<DialogItem data={item} key={item.id}/>) );
    return (
        <div className={classes.dialogsItems}>
            {dialogsElements}
        </div>
    )
}

export default DialogsList;