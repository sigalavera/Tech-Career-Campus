import { combineReducers } from "redux";
import userReducer from "./userReducer";
import SyllabusReducer from "./SyllabusReducer";
import EventReducer from "./EventReducer";

export default combineReducers({
    user: userReducer,
    syllabus: SyllabusReducer,
    events : EventReducer

})