import { block } from 'bem-cn'
import React, {useState} from 'react'
import './Header.css'
import {useDispatch} from "react-redux";
import {changeMod} from "../../Store/app/Slices/itemsSlice";
import {AppState} from "../../Store/app/Types";
import {Modal} from "../ModalForm/modalForm";

interface Props {

}
const b = block("Header")
export const Header: React.FC<Props> = ()=>{
    const dispatch = useDispatch()

    const [modalMod, setModalMod] = useState(false)

    const toggleModal = () => setModalMod(!modalMod)

    return(
        <div className={b()}>
            <div className={b("logo")}>ToDo List</div>
            <div className={b('toggle')}>
               <p><a onClick={()=>{dispatch(changeMod("tasks"))}}>Задачи</a></p>
               <p>|</p>
               <p><a onClick={()=>{dispatch(changeMod("category"))}}>Категории</a></p>
            </div>
            <div className={b("addButton") }>
                <p><a onClick={()=>{toggleModal()}}>Добавить Задачу</a></p>
            </div>
            <Modal active={modalMod} setActive={toggleModal} data={null}/>
        </div>)
}
