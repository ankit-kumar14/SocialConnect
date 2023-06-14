const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/posts");

const app = express();

// Set up body-parser middleware
app.use(bodyParser.json());

// Set up routes
app.use("/api/", postRoutes);

// Start the server
app.listen(3000, () => console.log("Server started on port 3000"));
