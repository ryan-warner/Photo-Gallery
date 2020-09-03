//express variables
const express = require("express");
const app = express();
const port = 80;


var fs = require("fs");

var directory = fs.readFileSync("directory.json");

var jsonContent = JSON.parse(directory);

console.log("Gallery:", jsonContent[0].contents[0].name);
console.log("Folder:", jsonContent[0].contents[0].contents[0].name);
console.log("File:", jsonContent[0].contents[0].contents[0].contents[1].name);
console.log("File Path:",jsonContent[0].name+'/'+jsonContent[0].contents[0].name+'/'+jsonContent[0].contents[0].contents[0].name+'/')

app.set('view engine', 'pug');

//render homepage
app.get("/", (req, res) => {
    res.render('index');
});

//render additional pages
//...

app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});