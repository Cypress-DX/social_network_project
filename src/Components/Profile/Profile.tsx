import React from "react";
import s from "./Profile.module.css";
import {Posts} from "./Posts/Posts";
import {ProfileData} from "./ProfileData/ProfileData";
import {PostsType} from "../../index";

export type ProfilePropsType = {
    post: Array<PostsType>
}

export const Profile = (props: ProfilePropsType) => {
    const post = props.post
    return (
        <div className={s.content}>
            <ProfileData/>
            <Posts
            post={post}
            />
        </div>
    )
}