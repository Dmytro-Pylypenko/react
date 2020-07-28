import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0v6LHjd0XoO5vnTHen6FaMELlSjHEoC7rzw&usqp=CAU',
                followed: false,
                fullname: 'Dmytro',
                status: 'i am a Capital',
                location: { city: 'Kyiv', country: 'Ukraine' }
            },
            {
                id: 2,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0v6LHjd0XoO5vnTHen6FaMELlSjHEoC7rzw&usqp=CAU',
                followed: true,
                fullname: 'Andry',
                status: 'i am a Capital',
                location: { city: 'Warsaw', country: 'Poland' }
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0v6LHjd0XoO5vnTHen6FaMELlSjHEoC7rzw&usqp=CAU',
                followed: false,
                fullname: 'Sasha',
                status: 'i am here now',
                location: { city: 'Lodz', country: 'Poland' }  
            }
        ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                            <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>

            </div >)
        }
    </div >
}


export default Users;