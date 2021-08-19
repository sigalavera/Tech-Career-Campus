const StudentModel = require('../models/studentModel')

const addNewStudent = async (req, res) => {
  try {
    await StudentModel.insertMany([req.body], (err, result) => {
      if (err) console.log(err); 
      // const { password, ...studentInfo } = result;
      res.status(200).json({ massage: "create Student success!", data: result })

    });
  } catch (err) {
    res.status(500).json({ massage:  "creat new Student field", error: err });
  }
};

const getStudent = async (req, res) => {
  try {
    await StudentModel.find({}, (err, result) => {
      if (err) console.log(err); 
      res.status(200).json({ massage: "create Student success!", data: result })

    });
  } catch (err) {
    res.status(500).json({ massage:  "creat new Student field", error: err });
  }
};

module.exports = {
  addNewStudent,
  getStudent
};
