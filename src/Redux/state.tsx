type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    addPost: () => void
    updatePostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
type AddPostActionType = {
    type: "ADD-POST",
}
type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type ActionsTypes=AddPostActionType | UpdateNewPostTextActionType



let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 15},
                {id: 2, message: "It's my props", likesCount: 5},
                {id: 3, message: "Bla-bla", likesCount: 7},
                {id: 4, message: "Yo", likesCount: 3}
            ],
            newPostText: "it-cum"
        },
        dialogsPage: {
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
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("change state")
    },
    addPost() {
        let newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._callSubscriber();
    },
    updatePostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber();
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber();
        }
    }
}


export default store


