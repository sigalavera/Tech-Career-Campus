import { useState } from "react";
import { useDispatch } from "react-redux";
import { editGrade } from "../../../Redux/actions/userActions";
import "./EditGradeComponent.css";

const EditGradeComponent = ({ student, handleFnc }) => {
  const [newGrade, setEditGrade] = useState({ isEdit: false, filed: "" });

  const dispatch = useDispatch();
  

  return (
    <div className="student-info">
      <h3>
        {student.firstName} {student.lastName}
      </h3>
      {student.tests.map((test, index) => {
        return (
          <div key={index}>
            <h4>{test.name}</h4>
            {newGrade.isEdit && newGrade.filed === test.name ? (
              <>
                <input type="number" placeholder={test.grade} />
                <i
                  // supposed to send update grade to server
                  onClick={() => {
                    dispatch(editGrade("612004466a18a679004e2f03"));
                    setEditGrade({
                      isEdit: false,
                      filed: test.name,
                    });
                  }}
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
      <form className="grade-form">
        <label>Test name</label>
        <input type={"text"} placeholder={"Test name"} />
        <label>Grade</label>
        <input type={"number"} placeholder={"Grade"} />
        <button className="btn"  onClick={(e) => e.preventDefault()}>Add test</button>
      </form>
      <button className="btn " onClick={() => handleFnc()}>סגור</button>
    </div>
  );
};

export default EditGradeComponent;
