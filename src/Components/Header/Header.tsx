import React from 'react'
import './Header.css'

interface Props {

}

export const Header: React.FC<Props> = ()=>{
    return(
        <div className={"Header"}>
            <div className={"Header-logo"}>ToDo List</div>
            <div className={"Header-toggle"}>
               <p>Задачи</p>
               <p>|</p>
               <p>Категории</p>
            </div>
            <div className={"Header-addButton"}>
                Добавить (задачу/категорию)
            </div>
        </div>)
}
