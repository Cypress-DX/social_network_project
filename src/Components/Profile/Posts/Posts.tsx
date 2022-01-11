import React from "react";
import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import {PostsType, ProfilePageType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string | undefined) => void
}

export const Posts = (props: PropsType) => {

    let post = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        // debugger;
        let text = newPostElement.current?.value
        props.addPost(text)
    }
    return (
        <div className={s.content}>
            <h2>My posts</h2>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
                {post}
            </div>
        </div>
    )
}