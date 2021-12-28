import React from "react";
import s from "./Posts.module.css";
import {Post} from "./Post/Post";

export const Posts = () => {
    return (
        <div className={s.content}>
                My posts
                <div>
                    <textarea/>
                    <button>Add Post</button>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
        </div>
    )
}