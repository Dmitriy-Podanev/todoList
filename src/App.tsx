import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Table} from './Components/Table/Table';
import {Provider} from "react-redux";
import {store} from './Store/app/Store/store';
import {StoreProvider} from "./Store/app/Store/StoreProvider";


export const App: React.FC = () => (

    <Provider store={store}>
        <StoreProvider >
            <div className="App">
                <Header/>
                <Table/>
            </div>
        </StoreProvider>
    </Provider>


);
//init()




