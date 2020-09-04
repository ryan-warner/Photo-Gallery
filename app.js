//express variables
const express = require("express");
const app = express();
const port = 80;

app.set('view engine', 'pug');

//render homepage
app.get("/", (req, res) => {
    res.render('index');
});

//Index the directory
const fs = require("fs");

const directory = fs.readFileSync("directory.json");

const jsonContent = JSON.parse(directory);

console.log("Gallery:", jsonContent[0].contents[0].name);
console.log("Folder:", jsonContent[0].contents[0].contents[0].name);
console.log("File:", jsonContent[0].contents[0].contents[0].contents[1].name);
console.log("File Path:",jsonContent[0].name+'/'+jsonContent[0].contents[0].name+'/'+jsonContent[0].contents[0].contents[0].name+'/')

var navigation =  jsonContent[0].contents[0].contents;

console.log("Reading the index...")

var navigationArray = [];
var linkArray = [];

//render individual gallery pages
navigation.forEach(element => {
    var folders = folders + 1
    //list folder name as it exists in the directory
    console.log(`${element.name}`)
    //convert to usable name
    usableName = element.name.replace(/\s+/g, '-').toLowerCase();
    console.log("   "+"Usable Name: "+usableName);
    //deploy page under that name with 
    app.get("/"+`${usableName}`, (req, res) => {
        res.render('gallery', {
            title: `${element.name}`,

        });
    });
    //add name and link to an array to be used for navigation
    navigationArray.push(`${element.name}`);
    linkArray.push(`${usableName}`)
    //use the element name as the internal title
    //? and more I'm sure
});


//render navigation page
app.get("/navigation", (req, res) => {
    res.render('navigation', {
        folders: navigationArray,
        links: linkArray
    });
});

//...

app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});