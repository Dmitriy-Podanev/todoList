
import { combineReducers } from "redux";
import {itemsReducer} from "./app/ItemsReduces";

export const rootReducer = combineReducers({task: itemsReducer})

