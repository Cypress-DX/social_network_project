import React from "react";
import s from './Dialogs.module.css'
import {Dialog} from "./dialog/Dialog";
import { Message } from "./Message/Message";
import {MessagesPageType} from "../../redux/state";

export const Dialogs = (props: MessagesPageType) => {

    const dialogElement = props.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)

    const messageElement = props.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage=()=>{
       let text = newMessageElement.current?.value
       alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div><textarea ref={newMessageElement}></textarea></div>
                <div><button onClick={addMessage}>Add Message</button></div>
            </div>

        </div>
    )
}

