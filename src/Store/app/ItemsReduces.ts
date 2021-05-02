import {AppState} from "./Types";
import {Reducer} from "react";
import {appActionEnum} from "./appActionEnum";

const initState:AppState.State ={
        loading: false,
        error:""
}

export const itemsReducer:Reducer<AppState.State,AppState.ItemsAction.All> = (state = initState,action:AppState.ItemsAction.All)=>{

        return state
}




