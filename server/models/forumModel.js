const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forumSchema = new Schema(
  {
<<<<<<< HEAD
    firstName:{
      type:String
    },
    
=======
>>>>>>> e32cd346e3830c6159e443ec3170c0b794bc8c3d
    message: {
      type: String,
      required:true
    },
    expireAt: {
      type: Date,
      required: true,
      default: Date.now,
      index: { expires: '90d' }
    },
    authorByStudent: { type: Schema.Types.ObjectId, ref: "student" },
    authorByStaff: { type: Schema.Types.ObjectId, ref: "staff" },
  },
  { timestamps: true },

);

const Forum = mongoose.model("forum", forumSchema);
module.exports = Forum;
