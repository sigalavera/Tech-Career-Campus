const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messagesSchema = new Schema(
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

const Messages = mongoose.model("messages", messagesSchema);
module.exports = Messages;
