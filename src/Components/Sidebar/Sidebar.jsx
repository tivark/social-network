import React from "react";
import classes from "./Sidebar.module.css";
import FriendsContainer from "./Friends/FriendsContainer";

const Sidebar = (props) => {
    return(
        <div className={classes.box}>
            <FriendsContainer/>
        </div>
    );
};

export default Sidebar;