import React from 'react';
import Preloader from '../../Common/preloader/Preloader';
import s from './ProfileInfo.module.css';



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div >
                <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-lDcf01cf8TTkRXKhvzjFizLpHkEXlwGaj64AQvUjD4YRknuC&usqp=CAU" alt="" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                    ava + descr
           </div>
        </div>
    )
}

export default ProfileInfo;