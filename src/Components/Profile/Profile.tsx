import React from "react";
import s from "./Profile.module.css";
import {Posts} from "./Posts/Posts";
import {ProfileData} from "./ProfileData/ProfileData";
import {DispatchActionType, PostsType, ProfilePageType} from "../../redux/state";
type PropsType = {
    posts: Array<PostsType>
    newPostData: string
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newPostData: string) => void
    dispatch: (action: DispatchActionType) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileData/>
            <Posts
            posts = {props.posts}
            newPostData={props.newPostData}
            dispatch={props.dispatch}
            // addPost={props.addPost}
            // updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}