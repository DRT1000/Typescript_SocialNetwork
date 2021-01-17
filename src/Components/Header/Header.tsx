import React from "react";
import s from "./Header.module.css"


function Header(){
    return(
        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocDcoRg_mAA1UWddU9-iWlEygjRIAJcS8LA&usqp=CAU"/>
        </header>
    )
}

export default Header