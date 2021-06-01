import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {InitialDialogsStateType, sendMessageCreator} from "../../Redux/DialogsReducer";

function Dialogs() {

    const dispatch = useDispatch()
    const {dialogs,messages} = useSelector<AppStateType, InitialDialogsStateType>(state => state.dialogsPage)


    const formik = useFormik({
        initialValues: {
            newMessage: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            dispatch(sendMessageCreator(formik.values.newMessage))
            formik.resetForm()
        },
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs.map(d=><DialogItem name={d.name} key={d.id} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                <div>{messages.map(m=><Message message={m.message} key={m.id} id={m.id}/>)}</div>
                <form onSubmit={formik.handleSubmit}>
                    <textarea
                        id="newMessage"
                        name="newMessage"
                        value={formik.values.newMessage}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}>
                    </textarea>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Dialogs