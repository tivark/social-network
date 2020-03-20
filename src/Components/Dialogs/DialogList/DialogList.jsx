import React from "react";
import classes from "./DialogsList.module.css";
import DialogItem from "./DialogItem/DialogItem";

const DialogsList = (props) =>{
    let dialogsData = [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Sveta'},
    ];
    let dialogsElements = dialogsData.map( item => (<DialogItem data={item}/>) );
    return (
        <div className={classes.dialogsItems}>
            {dialogsElements}
        </div>
    )
}

export default DialogsList;