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
    account: "angel",
  };

  console.log("Emitting data: " + JSON.stringify(data));
  io.emit("device", data);

  io.on("exercise", function (data) {
    console.log("Exercise received: " + data);
    console.log("Emitting results...");
    let results = {
      tipos: ["rojo", "azul"],
      tiempo: 20,
    };
    io.emit("results", JSON.stringify(results, null, 4), function (response) {
      console.log("Results emitted");
    });
  });
});
