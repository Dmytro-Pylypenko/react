import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";

let store = {
    _state: {
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
            ],
            newMessageText: '',
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {

        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}
export default store;
window.store = store;
