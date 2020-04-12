const Device = require("../db/models/device");

function create_io(server) {
  const io = require("socket.io")(server);

  io.on("connection", function (socket) {
    console.log(`Client connected: socket.id`);

    socket.on("device", function (data) {
      device = new Device({
        sid: socket.id,
        engine: data.engine,
        device: data.device,
        account: data.account
      });

      device.save(function (err) {
        if (err) return console.error(err);
        console.log(`Device ${socket.id} saved to DB`);
      });
    });

    socket.on("results", function (data, callback) {
      Device.findOneAndUpdate(
        { sid: socket.sid },
        { $push: { results: data } }
      );
      callback("OK");
    });

    socket.on("disconnect", function () {
      console.log(`Client disconnected: ${socket.id}`);
      Device.deleteOne({ sid: socket.id }, function (error) {
        if (error) console.log(error);
        console.log(`Client ${socket.id} deleted from DB`);
      });
    });
  });

  return io;
}

module.exports = create_io;
