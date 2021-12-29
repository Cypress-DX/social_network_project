import React from "react";
import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import {PostsType} from "../../../index";

export type PostsPropsType = {
    post: Array<PostsType>
}

export const Posts = (props: PostsPropsType) => {

    // let posts = [
    //     {message: "Hi, how are you?", likes: 4},
    //     {message: "It is my second post", likes: 3},
    //     {message: "I am learning React", likes: 0},
    // ]

    let post = props.post.map( p => <Post message={p.message} likes={p.likes} />)

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