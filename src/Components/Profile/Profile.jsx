import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(
        <div className={classes.content}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Wide_lightning.jpg" className={classes.cover} alt=""/>
            <div className={classes.userInfo}>
                <div className={classes.avatar}>
                    <img src="https://lh3.googleusercontent.com/coMv1dl31PCfEs6essJoEUwVryaqKHKQvENdZ_WYpN-PXa8Qfitkg3grQxIVN22W5A" alt=""/>
                </div>
                <div className={classes.details}>
                    <div className={classes.name}>Name</div>
                    <div className={classes.description}>
                        <div className={classes.city}>City</div>
                        <div className={classes.birthday}>Birthday</div>
                    </div>
                </div>
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;