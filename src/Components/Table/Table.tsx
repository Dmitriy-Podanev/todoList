import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootStore} from "../../Store/app/store";
import { Modal } from "../ModalForm/modalForm";
import {getAllItems} from "../../indexedDB";
import {AppState} from "../../Store/app/Types";
import {log} from "util";

interface Props {

}
export const Table: React.FC<Props> = ()=>{
    //const State = useSelector((state:RootStore)=>state.task)
    const[modalMod,setModalMod] = useState(false)
    const toggleModal = ()=> setModalMod(!modalMod)
    const[state,setState] = useState([])
    let dataI =[]
    useEffect(()=>{
        getAllItems().then(res=>console.log(res))
        dataI = getAllItems()
    },[])

    return(
        <div>
            <button type="submit" onClick={toggleModal}>Запустить окно</button>
            <Modal active={modalMod} setActive={toggleModal} data={null}/>
            {dataI.length }
        </div>

    )
}
//todo убрать data из Modal
//перенести header сюда, чтобы формаровать data и закидывать в modal