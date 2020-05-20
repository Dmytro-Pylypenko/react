import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        { id: 0, message:'Hi, how are you', LikesCount:12 },
        { id: 1, message:'It\'s my first post',LikesCount:24 },
        { id: 2, message:'Yo', LikesCount:22 },
    ]
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
                <Post message={postsData[0].message} LikesCount={postsData[0].LikesCount} />
                <Post message={postsData[1].message} LikesCount={postsData[1].LikesCount} />
                <Post message={postsData[2].message} LikesCount={postsData[2].LikesCount} />
            </div>
            <div>

            </div>
        </div>
    )

}

export default MyPosts;