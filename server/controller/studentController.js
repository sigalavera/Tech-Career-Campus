const StudentModel = require('../models/studentModel')

const addNewStudent = async (req, res) => {
  try {
    await StudentModel.insertMany([req.body], (err, result) => {
      if (err) console.log(err);
      res.status(200).json({ massage: "create Student success!", data: result })

    });
  } catch (err) {
    res.status(500).json({ massage: "creat new Student field", error: err });
  }
};

const getStudent = async (req, res) => {
  try {
    await StudentModel.find({}, (err, result) => {
      if (err) console.log(err);
      res.status(200).json({ massage: "get Student success!", data: result })

    });
  } catch (err) {
    res.status(500).json({ massage: "get Student field", error: err });
  }
};

const GetStudentGradeById = async (req, res) => {
  try {
    StudentModel.findOne({ IdNumber: req.body.IdNumber }, (error, result) => {
      if (error) throw error
      res.status(200).json({ massage: "get Student grades by id success!", data: result.tests })

    })
  }
  catch (err) {
    res.status(500).json({ massage: "get Student grades by id", error: err });
  }
}
module.exports = {
  addNewStudent,
  getStudent,
  GetStudentGradeById
};
