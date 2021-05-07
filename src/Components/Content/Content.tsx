import {useDatabase} from "../../hooks/useDatabase";
import {useDispatch} from "react-redux";
import {appImportTasks} from "../../Store/app/action";
import React, {useEffect, useState} from "react";
import {DatabaseManager, DatabaseManagerEventName} from "../../DataBaseManager";
import {AppState} from "../../Store/app/Types";


export const Content: React.FC =()=>{

    const database = useDatabase()
    const dispatch = useDispatch()
    const itemState = useState()

    const databaseLoader = ()=>{
        database.getAllObjects<(result: AppState.itemState[]) =>AppState.ItemsAction.All>('items',tasks => dispatch(appImportTasks(tasks)) )
        database.getAllObjects('items',console.log)
    }

    useEffect(()=>{
            window.addEventListener(DatabaseManagerEventName,()=>databaseLoader())
            console.log("Отрендарил")
    },[])


    return(<div>{}</div>)
}