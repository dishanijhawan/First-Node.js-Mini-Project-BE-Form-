require("dotenv").config();
//isme password n all configuration files rakhne ke liye ki baar baar ue karen to change hoje
//dot env package...environment variables ko bahar rkhne ke liye //configurable things...api, password inke liye// process.env use krte hain
//routing //client ki req, application endpoint handle krti h
const contactus = require("./routers/contact_us.js");
const router1 = require("./routers/client.js");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//express is a framework...makes work easier //first we need install express too.
const mongoString = process.env.DATABASE_URL; //as env var rakha hai .env file mein

//creates middleware, express mein use hota, npm module to process data sent in http request body, target controller ke paas request jaane tk, yeh handle krta hai...before parsing...it is just a string but after it becomes an object....access krta hai req.body from within routes and use that data.
const urlencodedParser = bodyParser.urlencoded({ extended: false }); //urlencoded form ke liye hota
//aise hi JSON ke liye bhi hota hai...

const datahere = require("./database.js"); //database ki file ko require kr lia
datahere(mongoString); //call kia

app.use("/contact", urlencodedParser, contactus);
//Now, this, listen //bind and listen to the connections
app.listen(3001); //3001  is port number,
app.use("/", urlencodedParser, router1);

//callback fn: fn that will be executed, once our app starts listening
