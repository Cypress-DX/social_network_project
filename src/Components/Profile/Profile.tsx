import React from "react";
import s from "./Profile.module.css";
import {Posts} from "./Posts/Posts";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfilePageType} from "../../redux/state";


export const Profile = (props: ProfilePageType) => {
    return (
        <div className={s.content}>
            <ProfileData/>
            <Posts
            posts = {props.posts}
            />
        </div>
    )
}