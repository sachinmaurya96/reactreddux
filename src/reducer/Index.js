import changeNumber from "./IncDec";
import multNumber from "./multDiv";
import todolist from "./Todof";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeNumber,
    multNumber,
    todolist
    
})

export default rootReducer