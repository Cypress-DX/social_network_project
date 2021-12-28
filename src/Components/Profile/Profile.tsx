import React from "react";
import s from "./Profile.module.css";
import {Posts} from "./Posts/Posts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://thumbs.dreamstime.com/z/cyclists-bike-race-banner-style-colorful-illustration-bunch-taking-part-white-background-56476672.jpg"/>
            </div>
            <Posts/>
        </div>
    )
}