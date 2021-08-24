const router = require("express").Router();
const StudentModel = require("../models/Student.model")

// to see all students
router.get("/", (req, res, next) => {
  StudentModel.find()
  .then( (allStudents) => res.render("students/list", {allStudents}))
  .catch( (err) => console.log(err));
});

module.exports = router;
