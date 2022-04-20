export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: (p: any) => void) => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    // addMessage: () => void
    // updateNewMessageText: (newMessage: string) => void
    dispatch: (action: DispatchActionType) => void
}

export type DispatchActionType = AddPostActionType | UpdateNewPostTextType |
    AddMessageType | UpdateNewMessageTextType

export type AddPostActionType = ReturnType<typeof addPostActionCreator>

export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>

export type AddMessageType = ReturnType<typeof addMessageActionCreator>

export type UpdateNewMessageTextType = ReturnType<typeof updateNewMessageTextActionCreator>


export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}
export const addMessageActionCreator = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}
export const updateNewMessageTextActionCreator = (newMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessage: newMessage
    } as const
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you????", likes: 4},
                {id: 2, message: "It is my second post", likes: 3},
                {id: 3, message: "I am learning React in IT Inkubator", likes: 0},
            ],
            newPostData: ''
        },
        messagesPage: {
            messages: [
                {message: "Hello"},
                {message: "How are you doing?"},
                {message: "I live in Kotlas"}
            ],
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Alex"},
                {id: 3, name: "NickJagger"},
                {id: 3, name: "Sasha"},
                {id: 3, name: "Mauzer"},
            ],
            newMessageText: ''
        },
        sideBar: {
            friends: [
                {id: 1, name: "Irishka", status: "love"},
                {id: 2, name: "Edik", status: "helper"},
                {id: 3, name: "Maksim", status: "adviser"},
            ]
        }
    },
    _callSubscriber() {
        console.log("state changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer: (p: any) => void) {
        this._callSubscriber = observer
    },

    // addPost() {
    //     // debugger;
    //     console.log(this.getState())
    //     let newPost: PostsType = {
    //         id: 4,
    //         message: this._state.profilePage.newPostData,
    //         likes: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._callSubscriber(this._state)
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostData = newText
    //     this._callSubscriber(this._state)
    // },
    // addMessage() {
    //     const newMessage: MessagesType = {
    //         message: this._state.messagesPage.newMessageText
    //     }
    //     this._state.messagesPage.messages.push(newMessage)
    //     this._callSubscriber(this._state)
    // },
    // updateNewMessageText(newMessage: string) {
    //     this._state.messagesPage.newMessageText = newMessage
    //     this._callSubscriber(this._state)
    // },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            console.log(this.getState())
            let newPost: PostsType = {
                id: 4,
                message: this._state.profilePage.newPostData,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostData = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === "ADD-MESSAGE") {
            const newMessage: MessagesType = {
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messages.push(newMessage)
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.messagesPage.newMessageText = action.newMessage
            this._callSubscriber(this._state)
        }
    }
}

// let _callSubscriber = () => {
//     console.log("state changed")
// }

// const state: StateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: "Hi, how are you????", likes: 4},
//             {id: 2, message: "It is my second post", likes: 3},
//             {id: 3, message: "I am learning React in IT Inkubator", likes: 0},
//         ],
//         newPostData: ''
//     },
//     messagesPage: {
//         messages: [
//             {message: "Hello"},
//             {message: "How are you doing?"},
//             {message: "I live in Kotlas"}
//         ],
//         dialogs: [
//             {id: 1, name: "Dima"},
//             {id: 2, name: "Alex"},
//             {id: 3, name: "NickJagger"},
//             {id: 3, name: "Sasha"},
//             {id: 3, name: "Mauzer"},
//         ],
//         newMessageText: ''
//     },
//     sideBar: {
//         friends: [
//             {id: 1, name: "Irishka", status: "love"},
//             {id: 2, name: "Edik", status: "helper"},
//             {id: 3, name: "Maksim", status: "adviser"},
//         ]
//     }
// }

export type PostsType = {
    id: number
    message: string
    likes: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostData: string
}
export type MessagesType = {
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}
export type FriendsType = {
    id?: number
    name: string
    status?: string
}
export type SideBarType = {
    friends: Array<FriendsType>
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sideBar: SideBarType
}
export type AppType = {
    // profilePage: ProfilePageType
    // messagesPage: MessagesPageType
    // sideBar: SideBarType
    state: StateType
    dispatch: (action: DispatchActionType) => void
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newPostData: string) => void
    // addMessage: (messageText: string) => void
    // updateNewMessageText: (newMessage: string) => void
}

// export const addPost = () => {
//     // debugger;
//     let newPost: PostsType = {
//         id: 4,
//         message: state.profilePage.newPostData,
//         likes: 0
//     }
//     state.profilePage.posts.push(newPost)
//     reRenderEntireTree()
// }
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostData = newText
//     reRenderEntireTree()
// }
// export const addMessage = () => {
//     const newMessage: MessagesType = {
//         message: state.messagesPage.newMessageText
//     }
//     state.messagesPage.messages.push(newMessage)
//     reRenderEntireTree()
// }
// export const updateNewMessageText = (newMessage: string) => {
//     state.messagesPage.newMessageText = newMessage
//     reRenderEntireTree()
// }
// export const subscribe = (observer: () => void) => {
//     reRenderEntireTree = observer
// }

export default store;

