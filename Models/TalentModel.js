const mongoose = require("mongoose");
const Users = require("./UserModel");

const ApplicantSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: [true, "must specify a user"],
  },
  firstName: {
    type: String,
    required: [true, "must specify a first name"],
  },
  lastName: {
    type: String,
    required: [true, "must specify a last name"],
  },
  city: {
    type: String,
    required: [true, "must specify a city"],
  },
  phoneNumber: {
    type: String,
    required: [true, "must specify a phone number"],
  },
  languages: {
    type: [String],
    default: [],
  },
  skills: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("Applicants", ApplicantSchema);
u;
