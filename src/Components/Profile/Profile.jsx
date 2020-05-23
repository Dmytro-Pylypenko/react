import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import state from './../../Redux/state';


const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts state={state.profilePage.postsData}/>
        </div>
    )
}

export default Profile;