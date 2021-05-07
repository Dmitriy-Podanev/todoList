import {DatabaseManager} from "../DataBaseManager";
import {useContext} from "react";
import {StoreContext} from "../Store/app/Store/StoreProvider";

export function useDatabase():DatabaseManager {
const databaseManager  = useContext(StoreContext)

    if(!databaseManager){
        throw new Error("Error")
    }
    return databaseManager
}