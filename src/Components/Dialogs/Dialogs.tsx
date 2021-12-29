import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogType = {
    name: string
    id: number
}

const Dialog = (props: DialogType) => {
    const path = "./" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {

    const dialogs = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Nick"},
        {id: 3, name: "Sasha"},
        {id: 3, name: "Mauzer"},
    ]

    const messages = [
        {message: "Hello"},
        {message: "How are you doing?"},
        {message: "I live in Kotlas"},
    ]

    const dialog = dialogs.map( d => <Dialog name={d.name} id={d.id} />)
    const message = messages.map( m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
            </div>
        </div>
    )
}