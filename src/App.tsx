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
import {StateType} from "./redux/state";



const App = (props: StateType) => {
    const messagesPage = props.messagesPage
    const postPage = props.profilePage
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar
               friends={props.sideBar.friends}
                />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/Dialogs/*' element={<Dialogs
                            dialogs={messagesPage.dialogs}
                            messages={messagesPage.messages}
                        />}/>
                        <Route path='/Profile' element={<Profile
                            posts={postPage.posts}
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
