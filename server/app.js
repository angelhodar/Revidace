require("dotenv").config();

const express = require("express");
const cors = require("cors");
var morgan = require("morgan");

// Firebase Admin SDK
const admin = require("firebase-admin");
const credentials = require("./config/firebase-adminsdk.json");

// Intialization
admin.initializeApp({
  credential: admin.credential.cert(credentials),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

// Create express app
const app = express();

// Inject SocketIO functionality
const server = require("http").Server(app);
const io = require("./sockets/io")(server);

// Establish connection with DB
const db = require("./db/connector");

// API Routes
const devicesRouter = require("./routes/api/devices")
const exercisesRouter = require("./routes/api/exercises")
const usersRouter = require("./routes/api/users")
const patientsRouter = require("./routes/api/patients")

// Swagger documentation
const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Swagger configuration
const options = {
  swaggerDefinition: {
    info: {
      title: 'AgreLink',
      version: '1.0.0',
      description: 'API REST for the AgreLink project',
    },
  },
  apis: ['./routes/api/*.js'],
};

const specs = swaggerJsdoc(options);

// Express middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Attach API routes
app.use("/api/v1/devices", devicesRouter);
app.use("/api/v1/exercises", exercisesRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/patients", patientsRouter);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

server.listen(process.env.PORT || 3000);

app.locals.io = io;
