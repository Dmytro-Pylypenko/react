import React from 'react';
import { sendMessageCreator, updateNewMessageCreator } from '../../Redux/dialogs-reduser'
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageCreator(body));

    }
    return <Dialogs updateNewMessagebody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
}

export default DialogsContainer;