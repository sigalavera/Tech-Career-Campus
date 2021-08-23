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

const getAllStaff= async(req,res) =>{
  try {
    await StaffModel.find({},(err,result)=>{
      if(err) throw err;
      res.status(200).json({massage: "find staff success!", data: result})
    });
  } catch (err) {
    res.status(500).json({massage: "find staff filed", data: result});
  }
}

const getAllStaffById = async (req,res) => {
  try {
    await StaffModel.findById(req.body.id,(err,result)=>{
      if(err) throw err;
      res.status(200).json({massage: "find by id staff success!", data: result})
    });
  } catch (error) {
    res.status(500).json({massage: "find by id staff filed", data: result});
  }
}

const deleteStaffById = async (req,res) => {
  try {
    await StaffModel.findByIdAndDelete(req.body.id,(err,result)=>{
      if(err) throw err;
      res.status(200).json({massage: "delete by id staff success!", data: result})
    })
  } catch (error) {
    res.status(500).json({massage: "delete by id staff filed", data: result});
  }
}

const updateStaffById = async (req,res) =>{
  try {
    await StaffModel.findByIdAndUpdate(req.params.id,{$set:req.body},(err,result)=>{
      if(err) throw err;
      res.status(200).json({massage: "update staff success!", data: result})
    })
  } catch (error) {
    res.status(500).json({massage: "update staff filed", data: result});
  }
}

module.exports = {
<<<<<<< HEAD
     addNewStaff ,
     getAllStaff,
     getAllStaffById,
     deleteStaffById,
     updateStaffById
=======
     addNewStaff,
>>>>>>> main
};