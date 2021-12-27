import React from 'react';
import logo from './logo.svg';
import './App.css';

const Header = () => {
    return (
        <div>
            <a href="#ee">News </a>
            <a href="#ee">Feed </a>
            <a href="#ee">Content </a>
            <a href="#ee">Messages</a>
        </div>
    )
}

const Technologies = () => {
    return (
        <div className="ul">
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        </div>
    )
}

const App = () => {
    return (
        <div>
            < Header/>
            < Technologies/>
        </div>
)
    ;
}

export default App;
