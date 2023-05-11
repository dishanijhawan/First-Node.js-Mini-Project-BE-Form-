const path = require("node:path");
const homepage = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/homepage.html"));
  // res.send("heyy Aman");
};

const about = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/about.html"));
};

const contact = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/form.html"));
};

const aboutus = (req, res) => {
  res.redirect("/about");
};

module.exports = {
  homepage,
  about,
  contact,
  aboutus,
};
