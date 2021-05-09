import {AppState} from "../Types";
import {Reducer} from "react";
import {appActionEnum} from "../appActionEnum";
import {createReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: AppState.State = { //[] && error
    // categoryM:[],
    taskM: [],
    loading: false,
    error: "",
    selectMode: "Tasks"
}

export const CategoriesSlice = createSlice({
    name: "itemTestSliceReducer",
    initialState,
    reducers: {
        appImportTask: ((state, action: PayloadAction<AppState.itemState[]>) => {
            state.taskM = action.payload
        }),
        changeMod: (state,action:PayloadAction<string>) => {
            state.selectMode = action.payload
        }


    }

})


export const {appImportTask, changeMod} = CategoriesSlice.actions


