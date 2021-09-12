import { combineReducers } from "redux";
import studentsReducer from "./studentsReducer";
import studentReducer from "./studentReducer";
import userReducer from "./userReducer";
import SyllabusReducer from "./SyllabusReducer";
import postsReducer from './posts'
<<<<<<< HEAD
import staffRedcuer from "./staffRedcuer";
=======
import coursesReducer from "./coursesReducer";
>>>>>>> 99add7ef50b8d22cefcf7d8666a2a7f376a79df4


export default combineReducers({
    user : userReducer,
    syllabus :SyllabusReducer,
    students: studentsReducer,
    student: studentReducer,
    posts: postsReducer,
<<<<<<< HEAD
    staff:staffRedcuer
=======
    courses: coursesReducer
>>>>>>> 99add7ef50b8d22cefcf7d8666a2a7f376a79df4
})