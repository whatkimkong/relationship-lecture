require("../db")

const mongoose = require("mongoose")
const StudentModel = require("../models/Student.model")

const students = [
  {
    name: "Alejandro",
    location: "Malta"
  },
  {
    name: "Carolina",
    location: "Madrid"
  },
  {
    name: "Florian",
    location: "Frankfurt"
  },
  {
    name: "Ines",
    location: "Lisbon"
  },
  {
    name: "Kim",
    location: "Berlin"
  },
  {
    name: "Leo",
    location: "Amsterdam"
  },
  {
    name: "Louise",
    location: "Valencia"
  },
  {
    name: "Lucia",
    location: "Valencia"
  },
  {
    name: "Marina",
    location: "Rotterdam"
  },
  {
    name: "Natasha",
    location: "Amsterdam"
  },
  {
    name: "Nick",
    location: "Madrid"
  },
  {
    name: "Sina",
    location: "Berlin"
  }
]


StudentModel.insertMany(students)
.then( (data) => {
  console.log(`inserted ${data.length} students`)
  return mongoose.connection.close()
})
.then(() => console.log("connection closed"))
.catch( (err) => console.log(err));
