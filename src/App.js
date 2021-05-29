import React from 'react';
import logo from './logo.svg';

import './App.css';

const homes = [
  { name: 'mi casa 1' },
  { name: 'mi casa 2' },
  { name: 'mi casa 3' },
  { name: 'mi casa 4' },
  { name: 'mi casa 5' },
];

function getText() {
  return 'da fuck';
}

function App() {
  return (
    <div className="App">
      <p>{getText()}</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{' '}
          {homes.map((home) => (
            <p>{home.name}</p>
          ))}
        </a>
      </header>
    </div>
  );
}

export default App;
