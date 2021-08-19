const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema(
  {
    className: {
      type: String,
      required: true,
    },

    isTaken: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);
