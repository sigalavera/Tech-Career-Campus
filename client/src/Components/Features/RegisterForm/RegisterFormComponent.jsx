import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStudent } from "../../../Redux/actions/studentsActions";
let generator = require("generate-password");

let password = generator.generate({
  length: 6,
  numbers: true,
});
const RegisterForm = () => {

  const userId = useSelector(state => state.user.id)
  const [newStudent, setNewStudent] = useState({
    registeredAs: "Student",
    id: userId,
    courseName:"פיתוח מ"
  });
  const handelChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();
  return (
    <form onSubmit={(e)=> e.preventDefault()}>
      <label>שם פרטי</label>
      <input name="firstName" onChange={(e) => handelChange(e)} type={"text"} />
      <label>שם משפחה</label>
      <input name="lastName" onChange={(e) => handelChange(e)} type={"text"} />
      <label>אימייל</label>
      <input name="email" onChange={(e) => handelChange(e)} type={"email"} />
      <label>מס טלפון</label>
      <input name="phone" onChange={(e) => handelChange(e)} type={"text"} />
      <label>גיל</label>
      <input name="age" onChange={(e) => handelChange(e)} type={"number"} />
      <label>סיסמא</label>
      <input
        name="password"
        onChange={(e) => handelChange(e)}
        type={"password"}
      />
      <button onClick={() => dispatch(createStudent(newStudent))}>הוסף</button>
    </form>
  );
};
export default RegisterForm;
