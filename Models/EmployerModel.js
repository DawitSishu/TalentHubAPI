const mongoose = require("mongoose");
const Users = require("./Users");

const EmployerSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: [true, "must specify a user"],
  },
  employerName: {
    type: String,
    required: [true, "must specify an employer name"],
  },
  email: {
    type: String,
    required: [true, "must specify a valid email address"],
  },
  phoneNumber: {
    type: String,
    required: [true, "must specify a phone number"],
  },
  city: {
    type: String,
    required: [true, "must specify a city"],
  },
});

module.exports = mongoose.model("Employers", EmployerSchema);
