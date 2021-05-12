import { Action as ActionRedux } from "redux";
import { appActionEnum } from "./appActionEnum";

export declare namespace AppState {
  // interface State {
  //     error: string,
  //     loading: boolean,
  //     taskM:itemState[],
  //     //categoryM: categoryState[],
  //     selectMode: string
  //
  // }
  interface State {
    error: string;
    loading: boolean;
    //taskM:itemState[],
    //categoryM: categoryState[],
    selectMode: string;
  }
  interface globalState {
    loading: false;
    error: string;
    selectMode: string;
  }

  interface itemState {
    id: number;
    Name: string;
    Description?: string;
    CategoryId?: number;
  }
  interface categoryState {
    id: number;
    Name: string;
    Description: string;
  }

  interface itemTypesForm {
    Name: string;
    Description?: string;
  }

  namespace ItemsAction {
    type importTasks = ActionRedux<appActionEnum.IMPORT_TASKS> & {
      payload: itemState[];
    };
    type addTask = ActionRedux<appActionEnum.ADD_TASK> & { payload: itemState };
    type editTask = ActionRedux<appActionEnum.EDIT_TASK> & { payload: object };
    type deleteTask = ActionRedux<appActionEnum.DELETE_TASK> & {
      payload: string;
    };
    //todo описать все типы

    type All = importTasks | addTask | editTask | deleteTask;
  }
}
