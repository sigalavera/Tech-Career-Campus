const StaffModel = require("../../models/staffModel");
const StudentModel = require("../../models/studentModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

const register = async (req, res) => {
  if (req.body.role === "Staff") {
    await StaffModel.findOne({ email: req.body.email }, (err, staff) => {
      if (err) throw err;
      if (staff) {
        return res.status(400).json({ massage: "email already exists" });
      }
      bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          req.body.password = hash;
          StaffModel.insertMany(req.body, (err) => {
            if (err) {
              return res
                .status(400)
                .json({
                  success: false,
                  message: "failed to create a staff",
                  err: err,
                });
            }
            return res
              .status(201)
              .json({
                success: true,
                message: "success to create a staff",
                err: err,
              });
          });
        });
      });
    });
  }

  if (req.body.role === "Student") {
    await StudentModel.findOne({ email: req.body.email }, (err, staff) => {
      if (err) throw err;
      if (staff) {
        return res.status(400).json({ massage: "email already exists" });
      }
      bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          req.body.password = hash;
          StudentModel.insertMany(req.body, (err) => {
            if (err) {
              return res
                .status(400)
                .json({
                  success: false,
                  message: "failed to create a student",
                  err: err,
                });
            }
            return res
              .status(201)
              .json({
                success: true,
                message: "success to create a student",
                err: err,
              });
          });
        });
      });
    });
  }
};
