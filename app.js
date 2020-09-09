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
    //list folder name as it exists in the directory
    console.log(`${element.name}`)
    //convert to usable name, replacing three hyphens if they occur together with a single hyphen
    usableName = element.name.replace(/\s+/g, '-').toLowerCase();
    usableName = usableName.replace('---', '-');
    console.log("   "+"Usable Name: "+usableName);
    
    //calculate the number of rows and columns
    console.log(element.contents)
    console.log(element.contents.length)
    
    //need to set a foreach in this, add name to array (skip zone identifier?) then pass that array to the pug page
    //the pug array should calculate the length, divide by 5, and round up to find the number of rows
    //should also add path of ALL GALLERY FOLDERS here for the specific page to reference
    //at least just HQ/SQ/T


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

//navigation variables
var numPhotos = (jsonContent[1].files)/3
var numAlbums = (jsonContent[1].directories)
//render navigation page
app.get("/navigation", (req, res) => {
    res.render('navigation', {
        folders: navigationArray,
        links: linkArray,
        photos: numPhotos,
        albums: numAlbums
    });
});

//...

app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});