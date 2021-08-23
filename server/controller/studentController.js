const StudentModel = require('../models/studentModel')
const StaffModel = require("../models/staffModel");

const addNewStudent = async (req, res) => {
  try {
    // const staff = await StaffModel.findById(req.params.id);
    await StudentModel.insertMany(req.body, async (err, result) => {
      if (err) console.log(err);
    //  await staff.find({ $gt: result });
    //   await staff.save();
    //  StaffModel.findById(req.params.id).updateOne({Students: result});
      // console.log(staff);
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

const getStudentGradeById = async (req, res) => {
  try {
    StudentModel.findById(req.body.id, (error, result) => {
      if (error) throw error
      res.status(200).json({
        massage: "get Student grades by id success!", data: result
      })

    })
  }
  catch (err) {
    res.status(500).json({ massage: "get Student grades by id faild", error: err });
  }
}
const addStudentTestById = async (req, res) => {
  try {
    StudentModel.findByIdAndUpdate(req.body.id, { $push: { "tests": { name: req.body.name, grade: req.body.grade } } }, (error, result) => {
      if (error) throw error
      res.status(200).json({ massage: "add test to a student by name was a success", data: result.tests })

    })
  }
  catch (err) {
    res.status(500).json({ massage: "adding a test to the test array faild", error: err });
  }
}
const updateStudentTestById = async (req, res) => {
  try {
    StudentModel.findOneAndUpdate({ _id: req.params._id, tests: { $elemMatch: { _id: req.body.id } } }, { $set: { "tests.$.grade": req.body.grade } }, (error, result) => {
      if (error) throw error
      res.status(200).json({ massage: "updating a student test was a success", data: result.tests })

    })
  }
  catch (err) {
    res.status(500).json({ massage: "updating a student test faild", error: err });
  }
}
const deleteStudentTestById = async (req, res) => {
  try {
    StudentModel.findByIdAndUpdate(req.params._id, { $pull: { tests: { _id: req.body.id } } }, (error, result) => {
      if (error) throw error
      res.status(200).json({ massage: "deleteing a student test was a success", data: result.tests })

    })
  }
  catch (err) {
    res.status(500).json({ massage: "deleteing a student test faild", error: err });
  }
}

module.exports = {
  addNewStudent,
  getStudent,
  getStudentGradeById,
  addStudentTestById,
  updateStudentTestById,
  deleteStudentTestById
};
