import {applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk";
import {rootReducer} from "../../rootReducer";
import {configureStore} from "@reduxjs/toolkit";
import {itemsSlice} from "../Slices/itemsSlice";
import {useDispatch} from "react-redux";

// export const store = createStore(rootReducer,applyMiddleware(thunk))
export const store = configureStore({reducer: rootReducer})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => {
    useDispatch<AppDispatch>()
}
export type RootStore = ReturnType<typeof store.getState>