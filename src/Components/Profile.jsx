import React from 'react';
import cont from'./Profile.module.css';

const Profile = () => {
    return <div className={cont.content}>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-lDcf01cf8TTkRXKhvzjFizLpHkEXlwGaj64AQvUjD4YRknuC&usqp=CAU' />
        </div>
        <div>
            ava + descr
        </div>
        <div>
            my posts
        </div>
        <div>
            new post
        </div>
        <div>
            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
            <div>
                post 3
            </div>
        </div>
    </div>
}

export default Profile;