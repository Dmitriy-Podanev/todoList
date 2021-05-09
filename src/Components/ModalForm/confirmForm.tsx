import React from "react";
import {AppState} from "../../Store/app/Types";
import {useDatabase} from "../../hooks/useDatabase";
import {DatabaseManagerEventName} from "../../DataBaseManager";
import {block} from "bem-cn";
import "./ModalForm.css"


interface Props {
    data: AppState.itemState | null
    active: boolean,
    setActive: () => void
}

const b = block("modal")
export const Confirm: React.FC<Props> = ({setActive, active, data}) => {
    const database = useDatabase()

    const deleteTask = (id: any) => {

        database.deleteObject('items', id)
        setActive()
        window.dispatchEvent(new CustomEvent(DatabaseManagerEventName));
    }
    const cancel = () => {
        setActive()
    }
    return (active ? (

        <div className={b()}>
            <div className={b("content")}>
                <p>Вы действительно хотите удалить ?</p>
                <p>{data?.Name}</p>
                <button onClick={() => deleteTask(data?.id)}>Удалить</button>
                <button onClick={() => cancel()}>Отменить</button>
            </div>

        </div>) : (null))
}