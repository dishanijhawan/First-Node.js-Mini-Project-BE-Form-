const sgMail = require("@sendgrid/mail"); //to send mails..sendgrid is used..another is nodemailer
const apiKey = process.env.API_KEY;
const model = require("../model/model.js");
sgMail.setApiKey(apiKey);

const contactController = (req, res) => {
  console.log(req.body);
  const msg = {
    to: "dishanijhawan7@gmail.com", // Change to your recipient
    from: "dishanijhawan7@gmail.com", // Change to your verified sender
    subject: "First Mail",
    text:
      "and easy to do anywhere, even with Node.js" +
      req.body.fname +
      " " +
      req.body.lname +
      " " +
      req.body.email +
      " " +
      req.body.phone +
      " " +
      req.body.message,

    html:
      "<strong>and easy to do anywhere, even with Node.js</strong>" +
      req.body.fname +
      "<br>" +
      req.body.lname +
      " " +
      req.body.email +
      " " +
      req.body.phone +
      " " +
      req.body.message,
  };
  //ab yeh neeche promises hain
  sgMail.send(msg).then(async (response) => {
    //STORING INTO DATABASE
    {
      const data = new model({
        name: req.body.fname + " " + req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
      });

      try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  });
};

module.exports = contactController;
