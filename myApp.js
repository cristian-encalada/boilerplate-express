require('dotenv').config();
let express = require("express");
let app = express();
const PORT = 3030;
console.log("Hello World");

const defaultMessage = "Hello json";
const style = process.env.MESSAGE_STYLE || 'uppercase';
const message = (style === 'uppercase') ? defaultMessage.toUpperCase() : defaultMessage;

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
    res.json({"message": message});
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

module.exports = app;
