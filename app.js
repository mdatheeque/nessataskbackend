//also contains all the middleware required to parse data from the frontend

//getting fs
const fs = require("fs");

//Getting dotenv
require("dotenv").config();

//Getting required middlewares modules
const bodyParser = require("body-parser");
const cors = require("cors");

//Getting express
const express = require("express");
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

//Actual Routes
app.use("/api/calllogs", (req, res) => {
  fs.readFile("./calllogs.json", function (err, data) {
    if (err) {
      return res.status("400").json({
        err: "something went wrong",
      });
    }

    const parsedData = JSON.parse(data)
    res.json(parsedData);
  });
});

//Creating port and listening to server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
