import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return(
        <div>
            <ProfileInfo />
            <MyPosts allPosts={props.postData}/>
        </div>
    );
}

export default Profile;