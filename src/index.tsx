import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {StateType} from "./redux/state";

import reportWebVitals from './reportWebVitals';
import {Post} from "./Components/Profile/Posts/Post/Post";

const reRenderEntireTree=(state: StateType)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App
                // profilePage={state.profilePage}
                // messagesPage={state.messagesPage}
                // sideBar={state.sideBar}
                state={state}
                dispatch={store.dispatch.bind(store)}
                // addPost={store.addPost.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}
                // addMessage={store.addMessage.bind(store)}
                // updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRenderEntireTree(store.getState())

store.subscribe(reRenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
