import React from "react";
import s from "./Friends.module.css";
import {NavLink} from "react-router-dom";
import {SideBarType} from "../../../redux/state";
import {Friend} from "./Friend/Friend";


export const Friends = (props: SideBarType) => {
    const friendElement = props.friends.map( f => (<Friend name={f.name}/>))
    return (
        <div>
            <h2>Friends</h2>
            <div className={s.element}>
                {friendElement}
            </div>

        </div>
    )
}