const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forumSchema = new Schema(
  {
    massageBody: {
      type: String,
      required: true,
    },
    creatorStudentMessages: { type: Schema.Types.ObjectId, ref: "student" },
    creatorStaffMessages: { type: Schema.Types.ObjectId, ref: "staff" },
  },
  { timestamps: true }
);

const Forum = mongoose.model("forum", forumSchema);
module.exports = Forum;
