import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import state from './../../../Redux/state';

const MyPosts = () => {
    let postsElements = state.profilePage.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />);

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