const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact-us.js");
// sgMail = require("@sendgrid/mail"); //to send mails..sendgrid is used..another is nodemailer
//const apiKey =
// "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";
//const model = require("../model/model.js");
//sgMail.setApiKey(apiKey);
//STORING INTO DATABASE

router.post("/", contactController);

// router.post("/", (req, res) => {
//   console.log(req.body);
//   const msg = {
//     to: "dishanijhawan7@gmail.com", // Change to your recipient
//     from: "dishanijhawan7@gmail.com", // Change to your verified sender
//     subject: "First Mail",
//     text:
//       "and easy to do anywhere, even with Node.js" +
//       req.body.fname +
//       req.body.lname,
//     html:
//       "<strong>and easy to do anywhere, even with Node.js</strong>" +
//       req.body.fname +
//       "<br>" +
//       req.body.lname +
//       " " +
//       req.body.message,
//   };
//   //ab yeh neeche promises hain
//   sgMail.send(msg).then(async (response) => {
//     //STORING INTO DATABASE
//     {
//       const data = new model({
//         name: req.body.fname,
//         name: req.body.lname,
//         email: req.body.email,
//         message: req.body.message,
//       });

//       try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave);
//       } catch (error) {
//         res.status(400).json({ message: error.message });
//       }
//     }
//   });

//   //res.send("SUCCESS");
// });

module.exports = router;
