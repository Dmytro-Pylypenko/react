import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 0, message: 'Hi, how are you', likesCount: 12 },
            { id: 1, message: 'It\'s my first post', likesCount: 24 },
            { id: 2, message: 'Yo', likesCount: 22 },
        ],
        newPostText: 'Pylypenko.com'
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dimka' },
            { id: 2, name: 'Bialka' },
            { id: 3, name: 'Victor' },
            { id: 4, name: 'Alex' },
            { id: 5, name: 'Valera' },
            { id: 6, name: 'Anton' },
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Da' },
            { id: 6, message: 'Yo' },
        ]
    }
}

export let addPost = () => {

    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);

}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

}


export default state;