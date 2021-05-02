import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { init } from './indexedDB';


export function App() {
init()
  return (
    <div className="App">
        <Header/>
    </div>
  );
}


