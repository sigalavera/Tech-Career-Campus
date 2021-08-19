const CourseModel = require('../models/courseModel')

const addNewCourse = async (req, res) => {
  try {
    await CourseModel.insertMany(req.body, (err, result) => {
      if (err) console.log(err); 
      res.status(200).json({ massage: "create course success!", data: result })

    });
  } catch (err) {
    res.status(500).json({ massage:  "creat course field", error: err });
  }
};


module.exports = {
     addNewCourse ,

};