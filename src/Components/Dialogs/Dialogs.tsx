import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import {DialogsPropsType} from "./DialogsContainer";
import {useFormik} from "formik";

function Dialogs(props: DialogsPropsType) {

    let dialogElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} key={m.id} id={m.id}/>)

    let addNewMessage = (values: string) => {
        props.sendMessage(values)
    }

    const formik = useFormik({
        initialValues: {
            newMessage: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            addNewMessage(formik.values.newMessage)
            formik.resetForm()
        },
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
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