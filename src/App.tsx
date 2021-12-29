import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {DialogsType, MessagesType, PostsType} from "./index";


type AppType = {
    post: Array<PostsType>
    dialog: Array<DialogsType>
    message: Array<MessagesType>
}


const App = (props: AppType) => {
    const dialog = props.dialog
    const message = props.message
    const post = props.post
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/Dialogs/*' element={<Dialogs
                            dialog={dialog}
                            message={message}
                        />}/>
                        <Route path='/Profile' element={<Profile
                            post={post}
                        />}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/News' element={<News/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
