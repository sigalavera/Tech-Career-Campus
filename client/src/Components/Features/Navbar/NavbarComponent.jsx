import React from 'react'
import { Link} from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return (
        <div>
            <h3> Navbar</h3>

            <div>

                <ul>
                    <li >
                        <Link to={"/news"}>חדשות</Link>
                    </li>
                    <li>
                        <Link to={"/events"}>אירועים</Link>
                    </li>
                    <li>
                        <Link to={"/course-schedule"}>לו"ז כיתות</Link>
                    </li>
                    <li>
                        <Link to={"/forum"}>פורום</Link>
                    </li>
                    <li>
                        <Link to={"/my-course"}>הקורס שלי</Link>
                    </li>


                </ul>
            </div>


        </div>
    )
}
