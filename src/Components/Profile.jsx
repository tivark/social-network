import React from 'react';

const Profile = () => {
    return(
        <div className='user-profile'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Wide_lightning.jpg" className="cover" alt=""/>
            <div className='user-info'>
                <div className='avatar-wrapper'>
                    <img src="https://lh3.googleusercontent.com/coMv1dl31PCfEs6essJoEUwVryaqKHKQvENdZ_WYpN-PXa8Qfitkg3grQxIVN22W5A" alt=""/>
                </div>
                <div className='user-details'>
                    <div className='user-name'>Name</div>
                    <div className='user-description'>
                        <div className='user-city'>City</div>
                        <div className='user-birthday'>Birthday</div>
                    </div>
                </div>
            </div>
            <div className='my-posts'>My posts
                <div className='new-post'>New post</div>
                <div className='post-list'>
                    <div className='post'>Post 1</div>
                    <div className='post'>Post 2</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;