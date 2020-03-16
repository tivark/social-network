import React from 'react';
import classes from './Profile.module.css';

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
            <div className={classes.allPosts}>My posts
                <div className={classes.newPost}>New post</div>
                <div className={classes.posts}>
                    <div className={classes.item}>Post 1</div>
                    <div className={classes.item}>Post 2</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;