require('dotenv').config();
let express = require("express");
let app = express();
const PORT = 3030;
console.log("Hello World");

style = process.env.MESSAGE_STYLE;
message = "Hello json";
absolutePath = __dirname + "/views/index.html";

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  // res.send('Hello Express');  Respond with "Hello Express" when a GET request is made to the homepage
  res.sendFile(absolutePath); // Respond with an HTML file
});

app.get("/json", (req, res) => {
    if (style === 'uppercase'){
        res.json({"message": message.toUpperCase()}); 
    }
    else {
        res.json({"message": message}); 
    }
  });

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });

module.exports = app;
