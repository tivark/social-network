import React from "react";
import classes from "./Users.module.css";

const Users = (props) => {
    return (
        <div className={classes.box}>
            {
                props.users.map(el => <div key={el.id}>
                    <span className="avatar"></span>
                    <div>{el.fullName}</div>
                    <div>{el.status}</div>
                </div>)
            }
        </div>
    );
};
export default Users;