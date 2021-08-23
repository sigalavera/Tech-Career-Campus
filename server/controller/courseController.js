const CourseModel = require('../models/courseModel')

const addNewCourse = async (req, res) => {
  try {
    await CourseModel.insertMany(req.body, (err, result) => {
      if (err) throw err; 
      res.status(200).json({ massage: "create course success!", data: result })

    });
  } catch (err) {
    res.status(500).json({ massage:  "creat course field", error: err });
  }
};
const getAllCourses = async (req, res) => {
  try {
    await CourseModel.find({}, (err, result) => {
      if (err) throw err; 
      res.status(200).json({ massage: "get course success!", data: result })

    });
  } catch (err) {
    res.status(500).json({ massage:  "get course field", error: err });
  }
};
const getCourseByName = async (req, res) => {
  try {
    await CourseModel.find(req.body.name, (err, result) => {
      if (err) throw err; 
      res.status(200).json({ massage: "get course by name success!", data: result })

    });
  } catch (err) {
    res.status(500).json({ massage:  "get course by name field", error: err });
  }
};

module.exports = {
     addNewCourse ,
     getAllCourses,
     getCourseByName,
};