import React from 'react';
import cont from'./Profile.module.css';
import MyPosts from'./MyPosts/MyPosts';


const Profile = () => {
    return <div className={cont.content}>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-lDcf01cf8TTkRXKhvzjFizLpHkEXlwGaj64AQvUjD4YRknuC&usqp=CAU' />
        </div>
        <div>
            ava + descr
        </div>
      <MyPosts/>
    </div>
}

export default Profile;