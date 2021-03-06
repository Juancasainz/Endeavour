const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
let dato = require("./model");
app.use(cors());

mongoose.connect("mongodb+srv://admin:Password01@cluster0.3ca2j.mongodb.net/datos?retryWrites=true&w=majority", {
  useNewUrlParser: true
});

const router = express.Router();
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.use("/", router);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});


router.route("/getData").get(function(req, res) {
  dato.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});