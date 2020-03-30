import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = (props) => {
    return (
        <div className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
            <Sidebar/>
            <div className={classes.item}>
                <NavLink to="/users">Find users</NavLink>
            </div>
        </div>
    );
}

export default Navbar;