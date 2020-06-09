import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


const Dialogs = (props) => {

    const DialogItem = (props) => {
        let path = "/dialogs/" + props.id;
        return <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    }
    const Message = (props) => {
        return <div className={s.dialog}>{props.message}</div>
    }

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m =>
        <Message newMessageText={props.dialogsPage.newMessageText} dispatch={props.dispatch}
            message={m.message}
        />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE' });
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text });

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.add}>
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} />
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;