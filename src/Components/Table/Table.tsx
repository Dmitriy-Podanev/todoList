import React, {useState} from "react";
import {useSelector} from "react-redux";
import {RootStore} from "../../Store/app/store";

interface Props {

}
export const Table: React.FC<Props> = ()=>{
    const State = useSelector((state:RootStore)=>state.task)

    return(
        <div>
            <button type="submit">Добавить</button>
        </div>
    )
}