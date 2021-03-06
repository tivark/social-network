import React from "react";
import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendsList = props.friends.map(el => (<Friend state={el} key={el.id}/>));
    return (
        <div className={classes.box}>
            <div className={classes.title}>Friends:</div>
            {friendsList}
        </div>
    );
};

export default Friends;