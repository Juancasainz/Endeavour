const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dato = new Schema({
   Data: {
    type: Object
  }

});

module.exports = mongoose.model("dato", dato);