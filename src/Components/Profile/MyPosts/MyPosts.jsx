import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add </button>
                </div>

            </div >
            <div className={s.posts}>
                <Post message='Hi, how are you' LikesCount='1' />
                <Post message="It's my first post" LikesCount='20' />
            </div>
            <div>

            </div>
        </div>
    )

}

export default MyPosts;