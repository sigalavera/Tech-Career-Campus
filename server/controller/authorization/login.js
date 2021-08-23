// const StaffModel = require("../../models/staffModel");
// const StudentModel = require("../messagesModel../models/studentModel");

// const loginUser= (req, res) => {

//     // if (!isValid) {
//     //     return res.status(400).json(errors);
//     // }
//     const email = req.body.email;
//     const password = req.body.password;

//     await StaffModel.findOne({ email }, (err, user) => {
//         // Check if user exists
//         if (!user) {
//             return res.status(404).json({ emailnotfound: "Email not found" });
//         }

//         await StudentModel.findOne({ email }, (err, user) => {
//             // Check if user exists
//             if (!user) {
//                 return res.status(404).json({ emailnotfound: "Email not found" });
//             }
//         // Check password
//         bcrypt.compare(password, user.password).then(isMatch => {
//             if (isMatch) {
//                 // User matched
//                 // Create JWT Payload
//                 const payload = {
//                     id: user.id,
//                     name: user.name,
//                     email: user.email
//                 };
//                 // Sign token
//                 jwt.sign(payload, keys.secretOrKey, { expiresIn: 31556926 }, (err, token) => {
//                     res.json({ success: true, token: "Bearer " + token,user:{name:user.name,email:user.email} });
//                 });
//             }
//             else {
//                 return res.status(400).json({ passwordincorrect: "Password incorrect" });
//             }
//         });
//     });
// }

// //exporting the functions in order to use them at userRouter
// module.exports = {

//     loginUser
// }