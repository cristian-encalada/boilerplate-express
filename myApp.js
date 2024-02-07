let express = require("express");
let app = express();
const PORT = 3030;
console.log("Hello World");

absolutePath = __dirname + "/views/index.html";

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  // res.send('Hello Express');  Respond with "Hello Express" when a GET request is made to the homepage
  res.sendFile(absolutePath); // Respond with an HTML file
});

app.get("/json", (req, res) => {
    // res.send('Hello Express');  Respond with "Hello Express" when a GET request is made to the homepage
    res.json({"message": "Hello json"}); // Respond with an HTML file
  });

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });

module.exports = app;
