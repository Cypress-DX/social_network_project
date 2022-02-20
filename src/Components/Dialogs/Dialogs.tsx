import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Dialog} from "./dialog/Dialog";
import { Message } from "./Message/Message";
import {DialogsType, MessagesPageType, MessagesType} from "../../redux/state";

type PropsType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    addMessage: (newMessage: string) => void
    updateNewMessageText: (newMessage: string) => void
    newMessageText: string
}

export const Dialogs = (props: PropsType) => {

    const dialogElement = props.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)

    const messageElement = props.messages.map(m => <Message message={m.message}/>)

    // let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage=()=>{
        props.addMessage(props.newMessageText)
        props.updateNewMessageText('')
       // let text = newMessageElement.current?.value
       // alert(text)
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div><textarea value={props.newMessageText} onChange={onChangeMessageHandler}/></div>
                <div><button onClick={addMessage}>Add Message</button></div>
            </div>

        </div>
    )
}

