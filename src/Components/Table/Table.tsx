import React, {useEffect, useState} from "react";

import {Modal} from "../ModalForm/modalForm";


import {AppState} from "../../Store/app/Types";

import {RootStore, store, useAppDispatch} from "../../Store/app/Store/store";
import {useDispatch, useSelector} from "react-redux";


import {useDatabase} from "../../hooks/useDatabase";

//import {appImportTasks} from "../../Store/app/action";
import {DatabaseManagerEventName} from "../../DataBaseManager";
import {Confirm} from "../ModalForm/confirmForm";
import {appImportTask, itemsSlice} from "../../Store/app/Slices/itemsSlice";
import { block } from "bem-cn";
//import {appImportTask} from "../../Store/app/action";


interface Props {

}
const b = block("Table")
export const Table: React.FC<Props> = () => {


    const taskState: AppState.State = useSelector((state: RootStore) => state.task)
    const [modalMod, setModalMod] = useState(false)
    const [confMod, setConfMod] = useState(false)
    const [confData, setConfData] = useState<AppState.itemState | null>(null)
    const [data, setData] = useState<AppState.itemState | null>(null)
    const toggleModal = () => setModalMod(!modalMod)
    const toggleConf = () => setConfMod(!confMod)
    const dispatch = useDispatch()
    const database = useDatabase()

    const change = (data: AppState.itemState | null) => {
        setData(data)
        toggleModal()
    }


    // const deleteTask = (id: number) => {
    //     database.deleteObject('items', id)
    //     window.dispatchEvent(new CustomEvent(DatabaseManagerEventName));
    // }

    const confirmDelete = (data: AppState.itemState | null) => {
        setConfData(data)
        toggleConf()
    }

    const databaseLoader = () => {
       // database.getAllObjects<(result: AppState.itemState[]) => AppState.ItemsAction.All>('items', tasks => dispatch(appImportTasks(tasks)))
        database.getAllObjects<(result: AppState.itemState[]) => any>('items',res=>dispatch(appImportTask(res)))


    }

    useEffect(() => {
        window.addEventListener(DatabaseManagerEventName, () => databaseLoader())

    }, [])


    return (
        <div>
            {/*<button type="submit" onClick={() => change(null)}>Запустить окно</button>*/}
            <Modal active={modalMod} setActive={toggleModal} data={data}/>
            <Confirm active={confMod} setActive={toggleConf} data={confData}/>
            {taskState.selectMode === "tasks" ? (<div>TASKS</div>):(<div>CATEGORY</div>)}
            {<table className={b(taskState.selectMode)}>
                {(taskState.taskM ? ([123,2]) :([123,3])).}
                {/*<thead>*/}
                {/*<tr>*/}

                {/*    <th>Название</th>*/}
                {/*    <th>Описание</th>*/}
                {/*    <th>Категория</th>*/}

                {/*</tr>*/}
                {/*</thead>*/}
                <tbody>


                {

                    taskState.taskM.map((itemKey: any) => {

                        return (

                            <tr key={itemKey.id}>
                                <td>{itemKey.Name ?? ""}</td>
                                <td>{itemKey.Description ?? ""}</td>
                                <td>{itemKey.CategoryId ?? ""}</td>
                                <td>
                                    <button onClick={() => change(itemKey)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => confirmDelete(itemKey)}>Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>

            </table>}


        </div>

    )
}
//todo убрать data из Modal
//перенести header сюда, чтобы формаровать data и закидывать в modal