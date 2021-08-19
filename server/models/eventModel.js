const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    eventName: {
      type: String,
      required: true,
    },

    massage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
