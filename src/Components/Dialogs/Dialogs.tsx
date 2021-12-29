import React from "react";
import s from './Dialogs.module.css'
import {Dialog} from "./dialog/Dialog";
import { Message } from "./Message/Message";

export const Dialogs = () => {

    const dialogs = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Nick"},
        {id: 3, name: "Sasha"},
        {id: 3, name: "Mauzer"},
    ]
    const dialogElement = dialogs.map(d => <Dialog name={d.name} id={d.id}/>)

    const messages = [
        {message: "Hello"},
        {message: "How are you doing?"},
        {message: "I live in Kotlas"}
    ]
    const messageElement = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}

