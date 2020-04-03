import React from "react";
import classes from "./Users.module.css";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                fullName: 'Vitali',
                status: 'i\'m a boss',
                location: {city: 'Minsk', country: 'Belarus'},
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaYP8vVW2RQsRLHiOLwJz6jhEYJ0JSMNGVq_WhNIaqkv2SMbou&usqp=CAU'
            },
            {
                id: 2,
                followed: true,
                fullName: 'Sergei',
                status: 'i\'m a boss too',
                location: {city: 'Moscow', country: 'Russia'},
                photoUrl: 'https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/39-512.png'
            },
            {
                id: 3,
                followed: false,
                fullName: 'Victor',
                status: 'i\'m a boss',
                location: {city: 'Kiev', country: 'Ukraine'},
                photoUrl: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png'
            }
        ]);
    }
    return (
        <div className={classes.box}>
            {
                props.users.map(el => <div className={classes.userWrapper} key={el.id}>
                    <div className={classes.avatarWrapper}><img src={el.photoUrl} alt={el.name}
                                                                className={classes.avatarImage}/></div>
                    <div className={classes.userDetails}>
                        <div>{el.fullName}</div>
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