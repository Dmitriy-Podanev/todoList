import {AppState} from "../Types";
import {Reducer} from "react";
import {appActionEnum} from "../appActionEnum";
import {createReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";

// const iniState: AppState.State = {//[] && error
//     // categoryM:[],
//     taskM: [],
//     loading: false,
//     error: "",
//     selectMode: "Tasks"
// }
const initialState = {
    data:[]

};

export const itemsSlice = createSlice({
    name: "itemTestSliceReducer",
    initialState,
    reducers: {
        appImportTask: ((state, action) => {
            state.data = action.payload
        }),

        

    }

})


export const {appImportTask} = itemsSlice.actions


