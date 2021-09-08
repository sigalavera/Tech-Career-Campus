const StudentCard = ({student})=>{
    return (
      <div>
        <img src="https://img.lovepik.com/element/40170/3915.png_860.png" alt={"Student"} />
        <h3>
          {student.firstName} {student.lastName}
        </h3>
        <p>{student.courseName}</p>
        <p>אימייל: {student.email}</p>
        <p>מס טלפון: {student.phone}</p>
        <p>גיל: {student.age}</p>
        <button>מחיקה</button>
        <button>עריכה</button>
      </div>
    );
}
export default StudentCard;