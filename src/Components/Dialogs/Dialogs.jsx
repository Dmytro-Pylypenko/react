import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import { sendMessageCreator, updateNewMessageCreator } from '../../Redux/dialogs-reduser'


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    const DialogItem = (props) => {
        let path = "/dialogs/" + props.id;
        return <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    }
    const Message = (props) => {
        return <div className={s.dialog}>{props.message}</div>
    }
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageText = state.newMessageText;

    let addMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.store.dispatch(updateNewMessageCreator(text));

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className={s.add}>
                    <div>
                        <textarea value={newMessageText}
                            placeholder='Enter your message'
                            onChange={onMessageChange}
                        />
                    </div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;