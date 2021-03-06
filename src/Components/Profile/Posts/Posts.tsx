import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import {
    addPostActionCreator,
    DispatchActionType,
    PostsType,
    ProfilePageType,
    updateNewPostTextActionCreator
} from "../../../redux/state";

type PropsType = {
    posts: Array<PostsType>
    newPostData: string
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newPostData: string) => void
    dispatch: (action: DispatchActionType) => void
}

export const Posts = (props: PropsType) => {

    const post = props.posts.map(p => <Post
        message={p.message}
        likes={p.likes}
    />)
    // const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        // debugger;
        // if (newPostElement.current) {
        //     props.addPost(props.newPostData)
        //     props.updateNewPostText('')
        props.dispatch(addPostActionCreator())
        props.dispatch(updateNewPostTextActionCreator(""))

        // }
    }

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            // props.updateNewPostText(e.currentTarget.value)
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))

    }

    return (
        <div className={s.content}>
            <h2>My posts</h2>
            <div>
                <div><textarea onChange={onChangePostHandler} value={props.newPostData}/></div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
                {post}
            </div>
        </div>
    )
}