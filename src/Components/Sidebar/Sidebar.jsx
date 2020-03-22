import React from "react";
import classes from "./Sidebar.module.css";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    return(
        <div className={classes.box}>
            <Friends state={props.state}/>
        </div>
    );
}

export default Sidebar;