import {ActionsTypes, DialogPageType} from "./store";


let initialState = {
    dialogs: [
        {id: 1, name: "Helen"},
        {id: 2, name: "Nick"},
        {id: 3, name: "Sam"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Mike"},
        {id: 6, name: "Ron"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"}
    ],
    newMessageTextBody: ""
}

function dialogsReducer(state: DialogPageType = initialState, action: ActionsTypes) {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return  {
                ...state,
                newMessageTextBody: action.body
            }

        case "SEND-MESSAGE":
            let body = state.newMessageTextBody
            return {
                ...state,
                newMessageTextBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            }
        default :
            return state
    }
}

export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const
}
export const sendMessageCreator = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}


export default dialogsReducer