const db = require('./db_connector')
const Patient = require('./models/patient')

patient1 = new Patient({
    name: "Raúl"
})

patient2 = new Patient({
    name: "Pepe"
})

patient3 = new Patient({
    name: "Antonio"
})

patient4 = new Patient({
    name: "Ángel"
})

patient5 = new Patient({
    name: "Jose"
})

async function populate() {
    patient1 = await patient1.save();
    patient2 = await patient2.save();
    patient3 = await patient3.save();
    patient4 = await patient4.save();
    patient5 = await patient5.save();
}
  
Patient.deleteMany({}, function(error){
if (error)
    console.log(error)
else
    console.log("Patients Removed")
})

populate()

console.log("Finished")