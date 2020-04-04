import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.jpg"

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }
    return (
        <div className={classes.box}>
            {
                props.users.map(el => <div className={classes.userWrapper} key={el.id}>
                    <div className={classes.avatarWrapper}><img src={el.photos.small != null ? el.photos.small : userPhoto} alt={el.name}
                                                                className={classes.avatarImage}/></div>
                    <div className={classes.userDetails}>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                        <div className={classes.followButtonWrapper}>
                            <button className={classes.followButton} onClick={() => {
                                props.followSwitcher(el.id)
                            }}>
                                {el.followed ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};
export default Users;