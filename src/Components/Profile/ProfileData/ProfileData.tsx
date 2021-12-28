import React from "react";
import s from "./ProfileData.module.css";


export const ProfileData = () => {
    return (
        <div>
            <div>
                <img
                    src="https://thumbs.dreamstime.com/z/cyclists-bike-race-banner-style-colorful-illustration-bunch-taking-part-white-background-56476672.jpg"/>
            </div>
            <div className={s.item}>
                ava and description
            </div>
        </div>


    )
}