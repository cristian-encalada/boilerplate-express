require('dotenv').config();
let express = require("express");
let app = express();
const PORT = 3030;
console.log("Hello World");

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
    const json = { message: "Hello json" };
    json.message = process.env.MESSAGE_STYLE === "uppercase" ? json.message.toUpperCase() : json.message;
    res.json(json);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

module.exports = app;
