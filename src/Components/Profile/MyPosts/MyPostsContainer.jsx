import React from 'react';
import MyPosts from './MyPosts';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reduser';
import StoreContext from '../../../StoreContext';


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer> 
            { store => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={store.getState().profilePage.posts}
                    newPostText={store.getState().profilePage.newPostText} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;