import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editGrade } from "../../../Redux/actions/userActions";
import EditGradeComponent from "../../Features/EditGrade/EditGradeComponent";

const AdminGradesComponent = () => {

  
  const [students, setStudents] = useState();
  useEffect(() => {
    fetch("http://localhost:8080/api/student")
      .then((response) => response.json())
      .then((response) => setStudents(response.data));
  }, []);

  const [studentInfo, setStudentInfo] = useState({
    isOpen: false,
    student: {},
  });

  return (
    <>
      <div>
        <h1>ציוני סטודנטים</h1>
        <input type="text" />
        <button>
          Search
        </button>
      </div>
      <div style={{ position: "relative" }}>
        {studentInfo.isOpen ? (
          <EditGradeComponent
            student={studentInfo.student}
            handleFnc={() => setStudentInfo(false)}
          />
        ) : (
          ""
        )}

        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">שם פרטי</th>
              <th scope="col">שם משפחה</th>
              <th scope="col">קורס</th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student, index) => (
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.courseName}</td>
                <td
                  onClick={() =>
                    setStudentInfo({ isOpen: true, student: student })
                  }
                >
                  <i className="fas fa-user-edit"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminGradesComponent;
