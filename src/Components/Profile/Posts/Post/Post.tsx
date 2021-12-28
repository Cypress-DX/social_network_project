import React from "react";
import s from "./Post.module.css";

type MessageType = {
    message: string
    likes: number
}

export const Post = (props: MessageType) => {
    return (
        <div className={s.item}>
                <img src="https://cdn.dribbble.com/users/1329247/screenshots/8195114/media/74d8d004178a94808265d8958c19c164.jpg?compress=1&resize=400x300"/>
            {props.message}
            <div>
                <span>likes: {props.likes}</span>
            </div>
        </div>

    )
}