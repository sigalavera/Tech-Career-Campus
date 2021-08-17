const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    summary:{
        type: String,
        require: false,
    },
    link:{
        type:[],
    }
    

  },
  { timestamps: true }
);

const Course = mongoose.model("course", courseSchema);
module.exports = Course;