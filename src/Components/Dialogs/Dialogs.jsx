import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimka' id='1' />
                <DialogItem name='Bialka' id='2' />
                <DialogItem name='Viktor' id='3' />
                <DialogItem name='Alex' id='4' />
                <DialogItem name='Valera' id='5' />
                <DialogItem name='Anton' id='6' />

            </div>
            <div className={s.messages}>
                <Message message="hi" />
                <Message message="Welcome to my network" />
                <Message message="Yo" />
            </div>
        </div>
    )
}

export default Dialogs;