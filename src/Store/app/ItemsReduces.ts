import {AppState} from "./Types";
import {Reducer} from "react";
import {appActionEnum} from "./appActionEnum";

const initState: AppState.State = {
    // categoryM:[],
    taskM: [],
    loading: false,
    error: "",
    selectMode: ""
}

export const itemsReducer: Reducer<AppState.State, AppState.ItemsAction.All> = (state = initState, action: AppState.ItemsAction.All):AppState.State => {
    switch (action.type) {
        case appActionEnum.IMPORT_TASKS:{
            return {...state, taskM: action.payload}
        }
    }
    return state

}