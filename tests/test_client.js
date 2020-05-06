require("dotenv").config();

var io = require("socket.io-client")(
  `${process.env.LOCAL}:${process.env.PORT || 3000}`
);

io.on("connect", function () {
  console.log("Connected to server");

  var data = {
    engine: "Python",
    manufacturer: "Oculus",
    device: "Quest",
    account: "Test",
  };

  console.log("Emitting data: " + JSON.stringify(data));
  io.emit("device", data);

  io.on("exercise", function (data) {
    console.log("Exercise received: " + data);
    console.log("Emitting results...");
    let results = {
      'Test Value': 5,
      'Another Test Value': 'correct',
      'Total Time': 20,
    };
    io.emit("results", results, function (response) {
      console.log("Response: " + response);
    });
  });
});
