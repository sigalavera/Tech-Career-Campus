const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messagesSchema = new Schema(
  {
    massage: {
      type: String,
    },
    authorByStudent: { type: Schema.Types.ObjectId, ref: "student" },
    authorByStaff: { type: Schema.Types.ObjectId, ref: "staff" },
  },
  { timestamps: true }
);

const Messages = mongoose.model("messages", messagesSchema);
module.exports = Messages;
