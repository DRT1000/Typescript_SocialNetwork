import React from "react";
import {NavLink} from "react-router-dom";
import s from "./../Dialogs.module.css"

type PropsType = {
    name: string
    id: number
}

function DialogItem(props: PropsType) {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.item+' '+s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



export default DialogItem