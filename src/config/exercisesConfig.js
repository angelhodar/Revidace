
function addDurationParam(exercises){
    for(i=0; i < exercises.length; i++){
        exercises[i].parameters.set("duration", {
            name: "Duración",
            description: "Duración del ejercicio en segundos"
          });
    }
}

module.exports = addDurationParam;