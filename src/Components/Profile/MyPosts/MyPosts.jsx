import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
    let posts = [
        {id: 1, message:'Hi, how are you?', likesCount: 4 },
        {id: 2, message:'It\'s my first post', likesCount: 52 },
        {id: 3, message:'Grate', likesCount: 5 },
        {id: 4, message:'Please', likesCount: 88 },
    ]
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div> 
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post </button>
                </div>
            </div >
            <div className={s.posts}>
                { postsElements }
            </div>
            <div>
            </div>
        </div>
    )
}

export default MyPosts;