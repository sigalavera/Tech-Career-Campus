import React from 'react'
import {
    Route,
    Switch
} from "react-router-dom";
import News from '../Components/Pages/News/NewsComponent';
import Events from '../Components/Pages/Events/EventsComponent';
import Forum from '../Components/Pages/Forum/ForumComponent'
import MyCourse from '../Components/Pages/MyCourse/MyCourseComponent';


const MainRouting = () =>{
    return(
        <Switch>
            <Route path="/news" component={News} />
            <Route path="/events" component={Events} />
            <Route path="/forum" component={Forum} />
            <Route path="/my-course" component={MyCourse} />
        </Switch>
    )
}

export default MainRouting;