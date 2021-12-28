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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={"Dima"} id={1} />
                <Dialog name={"Alex"} id={2} />
                <Dialog name={"Nick"} id={3} />
                <Dialog name={"Bob"} id={4} />
                <Dialog name={"Viktor"} id={5} />
            </div>
            <div className={s.messages}>
                <Message message={"Hello"} />
                <Message message={"How are you doing?"} />
                <Message message={"I live in Kotlas"} />
                <Message message={"Great"} />
            </div>
        </div>
    )
}