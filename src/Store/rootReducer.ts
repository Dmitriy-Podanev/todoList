
import { combineReducers } from "@reduxjs/toolkit";
import {itemsSlice} from "./app/Slices/itemsSlice";


export const rootReducer = combineReducers({task: itemsSlice.reducer})
export type RootStore = ReturnType<typeof rootReducer>

