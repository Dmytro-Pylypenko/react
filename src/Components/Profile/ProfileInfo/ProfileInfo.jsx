import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-lDcf01cf8TTkRXKhvzjFizLpHkEXlwGaj64AQvUjD4YRknuC&usqp=CAU' />
            </div>
            <div className={s.descriptionBlock}>
                ava + descr
           </div>
        </div>
    )
}

export default ProfileInfo;