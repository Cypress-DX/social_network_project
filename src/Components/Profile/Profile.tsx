import React from "react";
import s from "./Profile.module.css";
import {Posts} from "./Posts/Posts";
import {ProfileData} from "./ProfileData/ProfileData";
import {PostsType, ProfilePageType} from "../../redux/state";
type PropsType = {
    posts: Array<PostsType>
    newPostData: string
    addPost: (postMessage: string) => void
    updateNewPostText: (newPostData: string) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileData/>
            <Posts
            posts = {props.posts}
            newPostData={props.newPostData}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}