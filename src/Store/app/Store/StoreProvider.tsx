
import React from "react";
import { DatabaseManager } from "../../../DataBaseManager";


export const StoreContext  = React.createContext<DatabaseManager | null> (null)

StoreContext.displayName = "RootStore"

export const StoreProvider: React.FC = ({children})=>(
    <StoreContext.Provider value = {new DatabaseManager('QPD-db',["tasks","category"])}>
        {children}
    </StoreContext.Provider>
)
