const ForumSchema = require('../models/messagesModel')

const getAllMessages = async (req, res) => {
    try {
          await ForumSchema.find({}, (err, result) => {
            if (err) console.log(err);
            res.json({ massage: "success", data: result })
        })
    } catch (err) {
        res.json({ massage: "problem in database", error: err });
    }
}

const addNewMessage = async (req, res) => {
    try {
       await ForumSchema.insertMany(
            req.body.forum,
            (err, result) => {
                if (err) console.log(err);
                res.json({ massage: "add massage", data: result });
            })
    } catch (err) {
        res.json({ massage: "adding massage failed", error: err });
    }
}


const deleteMessage = async (req, res) => {
    try {

        await ForumSchema.findByIdAndDelete(req.params.id, (err, result) => {
            if (err) throw err;
            res.json({ massage: "delete student success"  })
        })

    }
    catch (err) {
        res.json({ massage: "problem with update", error: err });

    }
}

module.exports = {
    getAllMessages,
    addNewMessage,
    deleteMessage
}