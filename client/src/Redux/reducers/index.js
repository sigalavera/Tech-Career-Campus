import { combineReducers } from "redux";
import studentsReducer from "./studentsReducer";
import studentReducer from "./studentReducer";
import userReducer from "./userReducer";


export default combineReducers({
    user : userReducer,
    students: studentsReducer,
    student: studentReducer
})