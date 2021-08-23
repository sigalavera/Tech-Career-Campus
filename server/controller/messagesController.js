const MessagesModel = require("../models/messagesModel");
const StaffModel = require("../models/staffModel");
const StudentModel = require("../models/studentModel");

const MessagesByStaff = async (req, res) => {
  const staff = await StaffModel.findById(req.body.id);
  const newMessages = new MessagesModel({
    massage: req.body.message,
    authorByStaff: staff._id,
  });
  try {
    await newMessages.save();
    staff.messages.push(newMessages);
    await staff.save();

    res
      .status(201)
      .json({ message: "create new message success", data: newMessages });
  } catch (error) {
    res.status(409).json({ message: "create new message filed", error: error });
  }
};

const MessagesByStudent = async (req, res) => {
  const student = await StudentModel.findById(req.body.id);
  const newMessages = new MessagesModel({
    massage: req.body.message,
    authorByStaff: student._id,
  });
  try {
    await newMessages.save();
    student.messages.push(newMessages);
    await student.save();

    res
      .status(201)
      .json({ message: "create new message success", data: newMessages });
  } catch (error) {
    res.status(409).json({ message: "create new message filed", error: error });
  }
};

module.exports = {
  MessagesByStaff,
  MessagesByStudent,
};
