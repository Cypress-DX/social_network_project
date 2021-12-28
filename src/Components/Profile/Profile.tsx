import React from "react";
import s from "./Profile.module.css";
import {Posts} from "./Posts/Posts";
import {ProfileData} from "./ProfileData/ProfileData";



export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileData/>
            <Posts/>
        </div>
    )
}