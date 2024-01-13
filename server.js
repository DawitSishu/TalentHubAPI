const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const errorHandler = require("./Middlewares/ErrorHandler");
const DBConnect = require("./config/ConnectDB");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
DBConnect();

app.use(errorHandler);
 
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
