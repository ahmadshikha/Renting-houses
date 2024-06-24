const mongoose = require("mongoose");

const ownermodel =  mongoose.Schema(
  {
    code: {
      type: String,
      require: true,
    },
 username: {type:String,
    require: true,
 },
 password: {type:String,
    require: true,
 },
 phone: {type:Number,
    require: true,
 },
  },

);
const owners = mongoose.model("owner", ownermodel);
module.exports = {owners};
