import React from 'react'
import {
    Route,
    Switch
} from "react-router-dom";
import CourseSchedule from '../Components/Pages/CourseSchedule/CourseScheduleComponent';

import DailySchedule from '../Components/Pages/DailySchedule/DailyScheduleComponent';
import StudentGradesComponent from '../Components/Pages/Grades/StudentGradesComponent'
import AdminGradesComponent from '../Components/Pages/Grades/AdminGradesComponent'
import Syllabus from '../Components/Pages/Syllabus/SyllabusComponent'

const MyCourseRouting = () => {
    // temp role for switch component
    const role = "Admin"
    return (
        <Switch>
            <Route path="/my-course/daily-schedule" component={DailySchedule} />
            <Route path="/my-course/grades" component={role === 'Student' ? StudentGradesComponent : AdminGradesComponent} />
            <Route path="/my-course/course-schedule" component={CourseSchedule} />
            <Route path="/my-course/syllabus" component={Syllabus} />
        </Switch>
    )
}
export default MyCourseRouting;