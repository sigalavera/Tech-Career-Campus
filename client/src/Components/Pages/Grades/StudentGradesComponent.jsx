import { useEffect, useState } from "react";

const StudentGradesComponent = () => {
  const [student, setStudent] = useState();
  // Should be user object in state management

  useEffect(() => {
    fetch("http://localhost:8080/api/student")
      .then((response) => response.json())
      .then((response) => setStudent(response.data[4]));
  }, []);

  return (
    <>
      <h2>הציונים שלי</h2>
      {student?.tests.map((test, index) => {
        return (
          <div key={index}>
            <h3>{test.name}</h3>
            <p>{test.grade}</p>
          </div>
        );
      })}
    </>
  );
};
export default StudentGradesComponent;
