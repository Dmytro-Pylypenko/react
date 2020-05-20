import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsData = [
        { id: 0, message: 'Hi, how are you', likesCount: 12 },
        { id: 1, message: 'It\'s my first post', likesCount: 24 },
        { id: 2, message: 'Yo', likesCount: 22 },
    ]
    let postsElements =
        postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>send</textarea>
                </div>
                <div>
                    <button>Add </button>
                </div>
            </div >
            <div className={s.posts}>
                {postsElements}
            </div>
            <div>

            </div>
        </div>
    )

}

export default MyPosts;