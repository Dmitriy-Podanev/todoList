import { useSelector } from "react-redux";
import { RootStore } from "../../Store/app/Store/store";

export function Mode() {
  const globalState = useSelector((state: RootStore) => state.global);
  let response = "aa";
  switch (globalState.selectMode) {
    case "tasks": {
      response = "задание";
      break;
    }
    case "category": {
      response = "категорию";
      break;
    }
    default:
      response = "";
  }
  return response;
}
