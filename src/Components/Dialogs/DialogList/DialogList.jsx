import React from "react";
import classes from "./DialogsList.module.css";
import DialogItem from "./DialogItem/DialogItem";

const DialogsList = (props) =>{

    let dialogsElements = props.dialogs.map( item => (<DialogItem data={item}/>) );
    return (
        <div className={classes.dialogsItems}>
            {dialogsElements}
        </div>
    )
}

export default DialogsList;