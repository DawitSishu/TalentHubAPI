const mongoose = require("mongoose");
const Employers = require("./EmployerModel");

const JobSchema = mongoose.Schema({
  employer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employers",
    required: [true, "must specify an employer"],
  },
  jobPosition: {
    type: String,
    required: [true, "must specify a job position"],
  },
  salary: {
    type: Number,
    required: [true, "must specify a salary"],
  },
  deadline: {
    type: Date,
    required: [true, "must specify a deadline"],
  },
  experienceLevel: {
    type: String,
    required: [true, "must specify an experience level"],
  },
  workLocation: {
    type: String,
    required: [true, "must specify a work location"],
  },
  numberOfEmployees: {
    type: Number,
    required: [true, "must specify the number of employees"],
  },
  jobDescription: {
    type: String,
    required: [true, "must specify a job description"],
  },
  rolesAndResponsibilities: {
    type: String,
    required: [true, "must specify roles and responsibilities"],
  },
});

module.exports = mongoose.model("Jobs", JobSchema);
