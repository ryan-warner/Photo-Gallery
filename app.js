//express variables
const express = require("express");
const app = express();
const port = 80;

app.set('view engine', 'pug');

//render homepage
app.get("/", (req, res) => {
    res.render('index');
});

//render additional pages

app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});