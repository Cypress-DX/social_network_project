import React from "react";
import s from "./Profile.module.css";
import {Posts} from "./Posts/Posts";
import {ProfileData} from "./ProfileData/ProfileData";
import {PostsType, ProfilePageType} from "../../redux/state";
type PropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string | undefined) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileData/>
            <Posts
            posts = {props.posts}
            addPost={props.addPost}
            />
        </div>
    )
}