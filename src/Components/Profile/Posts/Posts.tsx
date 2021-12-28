import React from "react";
import s from "./Posts.module.css";
import {Post} from "./Post/Post";

export const Posts = () => {
    return (
        <div className={s.content}>
                My posts
                <div>
                    <div><textarea/></div>
                    <div> <button>Add Post</button></div>
                    <Post
                        message = "Hi, how are you?"
                          likes = {4}
                        />
                    <Post message = "It is my second post" likes = {3}/>
                    <Post message = "I am learning React" likes = {0}/>
                </div>
        </div>
    )
}