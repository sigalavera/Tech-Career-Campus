import { useState } from "react";
import "./EditGradeComponent.css";

const EditGradeComponent = ({ student, handleFnc }) => {
  const [editGrade, setEditGrade] = useState({isEdit:false, filed:""});

  return (
    <div className="student-info">
      <h3>
        {student.firstName} {student.lastName}
      </h3>
      {student.tests.map((test, index) => {
        return (
          <div key={index}>
            <h4>{test.name}</h4>
            {editGrade.isEdit && editGrade.filed === test.name ? (
              <>
                <input type="number" placeholder={test.grade} />
                <i
                  // supposed to send update grade to server
                  onClick={() =>
                    setEditGrade({ isEdit: false, filed: test.name })
                  }
                  className="fas fa-check-square"
                ></i>
              </>
            ) : (
              <p>
                {test.grade}
                <i
                  onClick={() =>
                    setEditGrade({ isEdit: true, filed: test.name })
                  }
                  className="far fa-edit"
                ></i>
              </p>
            )}
          </div>
        );
      })}
      <form>
        <label>Test name</label>
        <input type={"text"} placeholder={"Test name"} />
        <label>Grade</label>
        <input type={"number"} placeholder={"Grade"} />
        <button onClick={(e)=> e.preventDefault()}>Add test</button>
      </form>
      <button onClick={() => handleFnc()}>סגור</button>
    </div>
  );
};

export default EditGradeComponent;
