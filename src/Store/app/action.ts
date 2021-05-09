import {AppState} from "./Types";
import {appActionEnum} from "./appActionEnum";
import {createAction} from "@reduxjs/toolkit";


// export const appImportTasks = (payload:AppState.itemState[]):AppState.ItemsAction.importTasks=>({type:appActionEnum.IMPORT_TASKS,payload})
// export const appAddTask = (payload:AppState.itemState):AppState.ItemsAction.addTask=>({type:appActionEnum.ADD_TASK,payload})
// export const appEditTask = (payload:AppState.itemState):AppState.ItemsAction.editTask=>({type:appActionEnum.EDIT_TASK,payload})
// export const appDeleteTask = (payload:string):AppState.ItemsAction.deleteTask=>({type:appActionEnum.DELETE_TASK,payload})

// export const appImportTask = createAction<AppState.itemState[],appActionEnum.IMPORT_TASKS>(appActionEnum.IMPORT_TASKS)
// export const appAddTask = createAction(appActionEnum.IMPORT_TASKS)
// export const appEditTask = createAction(appActionEnum.IMPORT_TASKS)
// export const appDeleteTask = createAction(appActionEnum.IMPORT_TASKS)


//todo отредактировать payload