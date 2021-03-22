import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom"

type HeaderPropsType = {
    isAuth: boolean
    login: null | string
}

function Header(props: HeaderPropsType) {
    return (
        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocDcoRg_mAA1UWddU9-iWlEygjRIAJcS8LA&usqp=CAU"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header