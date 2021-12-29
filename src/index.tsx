import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Post} from "./Components/Profile/Posts/Post/Post";

export type MessagesType = {
    message: string
}

const messages: Array<MessagesType> = [
    {message: "Hello"},
    {message: "How are you doing?"},
    {message: "I live in Kotlas"}
]

export type DialogsType = {
    id: number
    name: string
}

const dialogs: Array<DialogsType> = [
    {id: 1, name: "Dima"},
    {id: 2, name: "Alex"},
    {id: 3, name: "NickJagger"},
    {id: 3, name: "Sasha"},
    {id: 3, name: "Mauzer"},
]

export type PostsType = {
    message: string
    likes: number
}

const posts: Array<PostsType> = [
    {message: "Hi, how are you????", likes: 4},
    {message: "It is my second post", likes: 3},
    {message: "I am learning React in IT Inkubator", likes: 0},
]

ReactDOM.render(
    <React.StrictMode>
        <App
            post={posts}
            dialog={dialogs}
            message={messages}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
