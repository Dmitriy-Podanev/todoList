import {AppState} from "../Types";
import {Reducer} from "react";
import {appActionEnum} from "../appActionEnum";
import {createReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: AppState.globalState = { //loading && selectMode
    // categoryM:[],

    loading: false,
    error: "",
    selectMode: "tasks"
}

export const globalSlice = createSlice({
    name: "itemTestSliceReducer",
    initialState,
    reducers: {

        changeMod: (state,action:PayloadAction<string>) => {
            state.selectMode = action.payload
        }


    }

})


export const {changeMod} = globalSlice.actions


