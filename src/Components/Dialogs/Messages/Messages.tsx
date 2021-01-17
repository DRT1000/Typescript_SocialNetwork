import React from "react";
import s from "./../Dialogs.module.css"


type MessagePropsType = {
    message: string
    id: number
}


function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export default Message