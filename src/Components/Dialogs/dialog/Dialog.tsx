import React from "react";
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogType = {
    name: string
    id: number
}
export const Dialog = (props: DialogType) => {
    const path = "./" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


