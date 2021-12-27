import React from "react";
import s from "./Profile.module.css";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://thumbs.dreamstime.com/z/cyclists-bike-race-banner-style-colorful-illustration-bunch-taking-part-white-background-56476672.jpg"/>
            </div>
            <div>
                My posts
                <div>
                    New Posts
                    <div className={s.item}>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                    <div>
                        Post 3
                    </div>
                </div>
            </div>
        </div>
    )
}