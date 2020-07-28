const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return  {
                ...state,
                newMessageText: action.newText
            };
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 7, message: newMessage }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })
export default dialogsReduser;