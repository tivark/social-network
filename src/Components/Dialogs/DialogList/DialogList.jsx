import React from "react";
import classes from "./DialogsList.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DislogItem";

const DialogsList = (props) =>{
    return (
        <div className={classes.dialogsItems}>
            <DialogItem name="Dmitry" id="1"/>
            <DialogItem name="Valera" id="2"/>
            <DialogItem name="Sveta" id="3"/>
        </div>
    )
}

export default DialogsList;