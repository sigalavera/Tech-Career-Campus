import React from 'react'
import {
    Route,
    Switch
} from "react-router-dom";

import DailySchedule from '../Components/Pages/DailySchedule/DailyScheduleComponent';
import Grades from '../Components/Pages/Grades/GradesComponent'
import Syllabus from '../Components/Pages/Syllabus/SyllabusComponent'

const MyCourseRouting = () => {
    return (
        <Switch>
            <Route path="/my-course/daily-schedule" component={DailySchedule} />
            <Route path="/my-course/grades" component={Grades} />
            <Route path="/my-course/syllabus" component={Syllabus} />
        </Switch>
    )
}
export default MyCourseRouting;