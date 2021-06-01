import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {updateUserStatus} from "../../../Redux/ProfileReducer";

type PropsType = {
    status: string
}

const ProfileStatus = (props: PropsType) => {
    const dispatch = useDispatch()

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    const onEditMode = () => setEditMode(true)
    const onOffEditMode = () => {
        setEditMode(false)
        dispatch(updateUserStatus(status))
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div>
            {editMode
                ? <div>
                    <input onChange={onStatusChange} autoFocus onBlur={onOffEditMode}
                           value={status}/>
                </div>
                : <div>
                    <span onDoubleClick={onEditMode}>{props.status || "----"}</span>
                </div>
            }
        </div>
    )
}


export default ProfileStatus