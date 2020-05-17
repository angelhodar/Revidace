const db = require("./db_connector");
const Patient = require("../models/patient");

patients = [
  p1 = new Patient({
    name: "Raúl Sánchez",
  }),
  p2 = new Patient({
    name: "Jose López",
  }),
  p3 = new Patient({
    name: "Mariano Rajoy",
  }),
  p4 = new Patient({
    name: "Ángel Hodar",
  }),
  p5 = new Patient({
    name: "Pedro Sánchez",
  }),
];

Patient.deleteMany({}, function(error) {
  if (error) {
    console.log(error);
  } else {
    patients.forEach((patient) => {
      patient.save(function(error) {
        if (error) console.log(error);
      });
    });
  }
});

console.log("Finished");