import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="ul">
      <div className="random">Hello world!</div>
      <div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
      <div>
        <button>Click me</button>
        <input placeholder="Type here"/>
      </div>
    </div>
  );
}

export default App;
