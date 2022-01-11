import {reRenderEntireTree} from "../render";

export type PostsType = {
    id: number
    message: string | undefined
    likes: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
type MessagesType = {
    message: string
}
type DialogsType = {
    id: number
    name: string
}
export type MessagesPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
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
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sideBar: SideBarType
    addPost: (postMessage: string | undefined)=>void
}
const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you????", likes: 4},
            {id: 2, message: "It is my second post", likes: 3},
            {id: 3, message: "I am learning React in IT Inkubator", likes: 0},
        ]
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
        ]
    },
    sideBar: {
        friends: [
            {id: 1, name: "Irishka", status: "love"},
            {id: 2, name: "Edik", status: "helper"},
            {id: 3, name: "Maksim", status: "adviser"},
        ]
    }
}
export let addPost=(postMessage: string | undefined)=>{
    // debugger;
    let newPost={
        id: 4,
        message: postMessage,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
    reRenderEntireTree(state)
}
export default state;

