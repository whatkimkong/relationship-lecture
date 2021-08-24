const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
  name: String,
  location: String
});

const StudentModel = model("Student", studentSchema);

module.exports = StudentModel;
