import { Link } from "react-router-dom"

const SideBar = ({children}) => {
  return (
    <div>
      <Link to={"/my-course/daily-schedule"}>לו"ז יומי</Link>
      <Link to={"/my-course/grades"}>הציונים שלי</Link>
      <Link to={"/my-course/syllabus"}>סילבוס</Link>
      {children}
    </div>
  );
};

export default SideBar;
