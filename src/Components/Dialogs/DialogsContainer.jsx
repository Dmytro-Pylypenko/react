import React from 'react';
import { sendMessageCreator, updateNewMessageCreator } from '../../Redux/dialogs-reduser'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

    let mapStateToProps = (state) => {
        return {
            dialogsPage: state.dialogsPage
        }
    }
    let mapDispatchToProps = (dispatch) => {
        return {
            sendMessage:() => { 
                dispatch(sendMessageCreator());
             },
             updateNewMessageText: (text) => { 
                dispatch(updateNewMessageCreator(text)); 
            }
        }
    }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;