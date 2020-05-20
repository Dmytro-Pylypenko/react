import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}                                                                                             //25 lesson
const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}
let dialogsData = [
    { id: 0, name: 'Dimka' },
    { id: 1, name: 'Bialka' },
    { id: 2, name: 'Victor' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Valera' },
    { id: 5, name: 'Anton' },
]
let messagesData = [
    { id: 0, message: 'Hi' },
    { id: 1, message: 'Welcome to my network' },
    { id: 2, message: 'Yo' },
]
let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
let messagesElements = messagesData.map(message => <Message message={message.message} id={message.id} />);
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;