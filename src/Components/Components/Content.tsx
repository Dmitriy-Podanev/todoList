import {block} from "bem-cn";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootStore} from "../../Store/app/Store/store";
import {AppState} from "../../Store/app/Types";

interface Props {

}

const b = block("Content")
export const Content: React.FC<Props> = () => {
    const taskState: AppState.State = useSelector((state: RootStore) => state.task)


    return (<div></div>)
}