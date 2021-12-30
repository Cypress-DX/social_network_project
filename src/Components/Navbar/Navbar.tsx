import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {SideBarType} from "../../redux/state";
import {Friends} from "./Friends/Friends";

export const Navbar = (props: SideBarType) => {
    return (
        <nav className={`${s.nav} ${s.item}`}>
            <div>
                <NavLink to="/Profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/Dialogs' className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/News' className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div>
                <NavLink to='/Music' className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div>
                <NavLink to='/Settings' className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </div>
            <Friends friends={props.friends} />
        </nav>
    )
}