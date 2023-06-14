require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  const dbConn = mongoose.connection;
  dbConn.on("error", (error) => console.error(error));
  dbConn.once("open", () => console.log("Connected to MongoDB"));

  exports.module = dbConn;