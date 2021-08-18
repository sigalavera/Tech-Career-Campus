const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
    },
    course: {
      type: String,
      require: true,
    },
    role: { 
        type: String,
        default: 'Student' 
    },
    profileImg: {
      type: String,
      default: "",
    },
    IdNumber: {
        type: String,
        default: "",
    },
    grade: {
        type: String,
        default: "",
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("student", studentSchema);
module.exports = Student;
