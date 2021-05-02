import {Action as ActionRedux} from 'redux'



export declare namespace AppState{
    interface State{
        error:string,
        loading:boolean
    }
    interface itemState {
        id:string
        Name:string
        Description?: string
        CategoryId?:string

    }
    interface itemTypesForm{
        Name:string
        Description?: string

    }

    namespace ItemsAction{
        type getAllItems = ActionRedux<AppState.ItemsAction.getAllItems> & {payload:object[]}
        //todo описать все типы

        type All = getAllItems
    }
}
