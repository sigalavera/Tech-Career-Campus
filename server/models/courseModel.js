const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    corse:{
      type: {
        name: {
          type: String,
          required: true,
        },
        CourseInformation: {
          type: [
            {
              nameSubject: String,
              topics: {
                type: [
                  {
                    subject: String,
                    isDone: {
                      type: Boolean,
                      required: true,
                      default: false,
                    },
                  },
                ],
              },
              summery: String,
              links: {
                type: [
                  {
                    tasks: {
                      type: String,
                      default: "",
                    },
                    Presentations: {
                      type: String,
                      default: "",
                    },
                    StudyAid: {
                      type: String,
                      default: "",
                    },
                  },
                ],
              },
              isDone: {
                type: Boolean,
                required: true,
                default: false,
              },
            },
          ],
        },
      },
    },

    coursesCreator: [{ type: Schema.Types.ObjectId, ref: "staff" }]
  },
  { timestamps: true }
);

const Course = mongoose.model("course", courseSchema);
module.exports = Course;
