import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div className={classes.box}>
                {
                    this.props.users.map(el => <div className={classes.userWrapper} key={el.id}>
                        <div className={classes.avatarWrapper}><img
                            src={el.photos.small != null ? el.photos.small : userPhoto} alt={el.name}
                            className={classes.avatarImage}/></div>
                        <div className={classes.userDetails}>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                            <div className={classes.followButtonWrapper}>
                                <button className={classes.followButton} onClick={() => {
                                    this.props.followSwitcher(el.id)
                                }}>
                                    {el.followed ? 'Unfollow' : 'Follow'}
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;