const StaffModel = require('../models/staffModel')

const addNewStaff = async (req, res) => {
  try {
    await StaffModel.insertMany(req.body, (err, result) => {
      if (err) console.log(err); 
      res.status(200).json({ massage: "create staff success!", data: result })

    });
  } catch (err) {
    res.status(500).json({ massage:  "creat new staff field", error: err });
  }
};


module.exports = {
     addNewStaff ,

};