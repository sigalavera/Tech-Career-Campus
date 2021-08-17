import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";
import News from '../News/NewsComponent';
import Events from '../Events/EventsComponent';
import CourseSchedule from '../CourseSchedule/CourseScheduleComponent';
import Forum from '../Forum/ForumComponent';
import MyCourse from '../MyCourse/MyCourseComponent';

const Layout = ({childern})=> {
    return (
        <div>
             <Switch>
                    <Route path="/news" component={News}/>
                    <Route path="/events" component={Events} />
                    <Route path="/course-schedule" component={CourseSchedule} />
                    <Route path="/forum" component={Forum} />
                    <Route path="/my-course" component={MyCourse}/>
            </Switch>
        </div>
    )
}
export default Layout
