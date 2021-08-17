const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema(
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
    courseName: {
      type: String,
      require: true,
    },
    role: { 
        type: String,
        default: 'Staff' 
    },
    profileImg: {
      type: String,
      default: "",
    },
    IdNumber: {
        type: String,
        default: "",
    },
    tests: {
      type: [{
        name:{
          type:String,
          require:true
        },
        grade:{
          type:String,
          require:true
        },
      }],
  },
  },
  { timestamps: true }
);

const Staff = mongoose.model("student", staffSchema);
module.exports = Staff;