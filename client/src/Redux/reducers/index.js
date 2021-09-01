import { combineReducers } from "redux";
import userReducer from "./userReducer";
import SyllabusReducer from "./SyllabusReducer";

export default combineReducers({
    user: userReducer,
    syllabus: SyllabusReducer,


})