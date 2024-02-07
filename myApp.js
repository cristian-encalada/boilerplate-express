let express = require('express');
let app = express();
console.log("Hello World");
// Respond with "Hello Express" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('Hello Express');
  })






























 module.exports = app;
