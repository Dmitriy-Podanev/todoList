import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { init } from './indexedDB';

import { Table } from './Components/Table/Table';


export function App() {
init()
  return (
    <div className="App">
        <Header/>
        <Table/>
    </div>
  );
}


