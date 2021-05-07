import React, {useEffect, useState} from "react";

import {Modal} from "../ModalForm/modalForm";


import {AppState} from "../../Store/app/Types";

import {RootStore} from "../../Store/app/Store/store";
import {useDispatch, useSelector} from "react-redux";


import {useDatabase} from "../../hooks/useDatabase";
import {Content} from "../Content/Content";


interface Props {

}

export const Table: React.FC<Props> = () => {
    const taskState: any = useSelector((state: RootStore) => state.task)
    const [modalMod, setModalMod] = useState(false)
    const toggleModal = () => setModalMod(!modalMod)
    const [state, setState] = useState<AppState.itemState[]>([])
    const dispatch = useDispatch()
    const database = useDatabase()


    type Task = AppState.State


    // @ts-ignore
    return (
        <div>
            <button type="submit" onClick={toggleModal}>Запустить окно</button>
            <Modal active={modalMod} setActive={toggleModal} data={null}/>
            <Content/>
            {<table className={"table"}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Age</th>
                    <th>E-mail</th>

                </tr>
                </thead>
                <tbody>


                {
                    taskState.taskM.map((itemKey: any) => {

                        return (

                            <tr key={itemKey.id}>
                                <td> {itemKey.id}</td>
                                <td>{itemKey.Name ?? ""}</td>
                                <td>{itemKey.Description ?? ""}</td>
                                <td>{itemKey.CategoryId ?? ""}</td>
                                <td>
                                    <button>Edit</button>
                                </td>
                                <td>
                                    <button>Delete
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