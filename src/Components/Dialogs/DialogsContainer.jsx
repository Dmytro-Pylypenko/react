import React from 'react';
import { sendMessageCreator, updateNewMessageCreator } from '../../Redux/dialogs-reduser'
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageCreator(body));
                }
                return <Dialogs updateNewMessagebody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={store.getState().dialogsPage} />
            }
            }
        </StoreContext.Consumer>
    )

}

export default DialogsContainer;