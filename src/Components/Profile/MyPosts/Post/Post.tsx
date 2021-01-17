import React from "react";
import s from "./Post.module.css"

type PropsType={
    message:string
    likesCount:number
}

function Post(props:PropsType) {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGAFOl77EWNsv2xs0hbNs33SG-_Vx4er19w&usqp=CAU"/>
                {props.message}
            </div>
            <div className={s.item}>
                <span>likes {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post