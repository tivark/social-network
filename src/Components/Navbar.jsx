import React from 'react';

const Navbar = () => {
    return (
        <div className='navigation-bar'>
            <div className='navigation-item'>
                <a href="#">Profile</a>
            </div>
            <div className='navigation-item'>
                <a href="#">Messages</a>
            </div>
            <div className='navigation-item'>
                <a href="#">News</a>
            </div>
            <div className='navigation-item'>
                <a href="#">Music</a>
            </div>
            <div className='navigation-item'>
                <a href="#">Settings</a>
            </div>
        </div>
    );
}

export default Navbar;