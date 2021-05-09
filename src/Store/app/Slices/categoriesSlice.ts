import {AppState} from "../Types";
import {Reducer} from "react";
import {appActionEnum} from "../appActionEnum";
import {createReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {data:[]}//[] && error
    // categoryM:[],




export const categoriesSlice = createSlice({
    name: "itemTestSliceReducer",
    initialState,
    reducers: {
        appImportCategory: ((state, action) => {
            state.data = action.payload
        }),



    }

})


export const {appImportCategory} = categoriesSlice.actions


