require('dotenv').config();
let express = require("express");
let app = express();
const PORT = 3030;
// [1] Meet the Node console
console.log("Hello World");

// [4] Serve Static Assets
app.use("/public", express.static(__dirname + "/public"));

// [7] Implement a Root-Level Request Logger Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// [3] Serve an HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
  // [2] Start a working Express Server
  // res.send('Hello Express');
});

// [6] Serve JSON on a Specific Route
app.get("/json", (req, res) => {
    const json = { message: "Hello json" };
    json.message = process.env.MESSAGE_STYLE === "uppercase" ? json.message.toUpperCase() : json.message;
    res.json(json);
});


// [8] Chain Middleware to Create a Time Server
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({time: req.time});
});


// [9] Get Route Parameter Input from the Client
app.get("/:anyWord/echo", (req, res) => {
  const json = req.params.anyWord;
  res.json({ echo: json });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

module.exports = app;
