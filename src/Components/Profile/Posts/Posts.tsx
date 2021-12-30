import React from "react";
import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

export const Posts = (props: ProfilePageType) => {

    let post = props.posts.map( p => <Post message={p.message} likes={p.likes} />)

    return (
        <div className={s.content}>
                <h2>My posts</h2>
                <div>
                    <div><textarea/></div>
                    <div> <button>Add Post</button></div>
                    {post}
                </div>
        </div>
    )
}