import { Link } from "react-router-dom"

const SideBar = () => {
  return (
    <div>
      <Link to={"/daily-schedule"}>לו"ז יומי</Link>
      <Link to={"/grades"}>הציונים שלי</Link>
      <Link to={"/syllabus"}>סילבוס</Link>
    </div>
  );
};

export default SideBar;
