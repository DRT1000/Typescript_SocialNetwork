import React, {useEffect} from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {DataType, getAuthUserData} from "../../Redux/authReducer";
import {AppStateType} from "../../Redux/redux-store";


function Header() {

    const dispatch = useDispatch()
    const {isAuth, login} = useSelector<AppStateType, DataType>(state => state.auth)

    useEffect(() => {
        dispatch(getAuthUserData())
    }, [])

    return (
        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocDcoRg_mAA1UWddU9-iWlEygjRIAJcS8LA&usqp=CAU"/>
            <div className={s.loginBlock}>
                {isAuth ? login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header