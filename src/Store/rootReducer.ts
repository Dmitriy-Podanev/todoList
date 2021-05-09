import {combineReducers} from "@reduxjs/toolkit";
import {itemsSlice} from "./app/Slices/itemsSlice";
import {categoriesSlice} from "./app/Slices/categoriesSlice";
import {globalSlice} from "./app/Slices/globalSlice";


export const rootReducer = combineReducers({
    task: itemsSlice.reducer,
    category: categoriesSlice.reducer,
    global: globalSlice.reducer
})
export type RootStore = ReturnType<typeof rootReducer>

