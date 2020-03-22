import React from "react";
import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendsList = props.state.friends.map(el => <Friend state={el}/>);
    return(
        <div className={classes.box}>
            <div className={classes.title}>Friends:</div>
            {friendsList}
        </div>
    );
}

export default Friends;