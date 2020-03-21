import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    let postData = [
        {id: 1, post: 'message 1', likes: 5},
        {id: 2, post: 'Valera', likes: 10},
        {id: 3, post: 'Yo Yo', likes: 15},
    ];

    return(
        <div>
            <ProfileInfo />
            <MyPosts allPosts={postData}/>
        </div>
    );
}

export default Profile;