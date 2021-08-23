const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forumSchema = new Schema(
  {
    massage: {
      type: String,
    },
    authorByStudent: { type: Schema.Types.ObjectId, ref: "student" },
    authorByStaff: { type: Schema.Types.ObjectId, ref: "staff" },
  },
  { timestamps: true }
);

const Forum = mongoose.model("forum", forumSchema);
module.exports = Forum;
