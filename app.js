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

// console.log("Gallery:", jsonContent[0].contents[0].name);
// console.log("Folder:", jsonContent[0].contents[0].contents[0].name);
// console.log("File:", jsonContent[0].contents[0].contents[0].contents[1].name);
// console.log("File Path:",jsonContent[0].name+'/'+jsonContent[0].contents[0].name+'/'+jsonContent[0].contents[0].contents[0].name+'/')

console.log('Initializing Photo Gallery')
console.log(' ')


var galleryRoot = jsonContent[0].name
app.use('/source',express.static(galleryRoot));
app.use('/styles',express.static(__dirname + '/styles'));
app.use('/corejs',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));
app.use('/js',express.static(__dirname + '/node_modules/simple-lightbox/dist'));
console.log('Gallery Root: ' + galleryRoot)
console.log(' ')

// finding HQ/SQ/T Gallery Indices
for (var i = 0; i <= jsonContent.length; i++){
  if (jsonContent[0].contents[i].name == 'HQ'){
      var HQInd = i
      console.log('High Quality Directory Found at index ' + HQInd)
  }
}

for (var i = 0; i <= jsonContent.length; i++){
    if (jsonContent[0].contents[i].name == 'SQ'){
        var SQInd = i
        console.log('Standard Quality Directory Found at index ' + SQInd)
    }
  }

  for (var i = 0; i <= jsonContent.length; i++){
    if (jsonContent[0].contents[i].name == 'T'){
        var ThumbInd = i
        console.log('Thumbnail Directory Found at index ' + ThumbInd)
    }
  }

var ThumbArray = jsonContent[0].contents[`${ThumbInd}`].contents;
var SQArray = jsonContent[0].contents[`${SQInd}`].contents;
var HQArray = jsonContent[0].contents[`${HQInd}`].contents;
var hQPath = galleryRoot + '/' + jsonContent[0].contents[HQInd].name
var sQPath = galleryRoot + '/' + jsonContent[0].contents[SQInd].name
var thumbPath = galleryRoot + '/' + jsonContent[0].contents[ThumbInd].name

console.log(' ')
console.log('Library Paths')
console.log('High Quality: ' + hQPath)
console.log('Standard Quality: ' + sQPath)
console.log('Thumbnail: ' + thumbPath)

console.log(' ')

var navigationArray = [];
var linkArray = [];

//render individual gallery pages
ThumbArray.forEach(element => {
    //list folder name as it exists in the directory
    console.log(`${element.name}`)
    //convert to usable name, replacing three hyphens if they occur together with a single hyphen
    usableName = element.name.replace(/\s+/g, '-').toLowerCase();
    usableName = usableName.replace('---', '-');
    console.log("   "+"Usable Name: " + usableName);

    var currentPath = '/T/' + element.name
    var sqPath = '/SQ/' + element.name
    console.log('   ' + 'Current Path: ' + currentPath)
    
    //calculate the number of rows and columns
    //console.log(element)
    
    //need to set a foreach in this, add name to array (skip zone identifier?) then pass that array to the pug page
    //the pug array should calculate the length, divide by 5, and round up to find the number of rows
    //should also add path of ALL GALLERY FOLDERS here for the specific page to reference
    //at least just HQ/SQ/T

    var files = element.contents
    //console.log(files)

    var filesArr = []
    files.forEach(element => {
        var temp = element.name.endsWith('.jpg') || element.name.endsWith('.png')
        if (temp == true) {
            filesArr.push(`${element.name}`)
        }
    })

    var index = ThumbArray.indexOf(element)

    var SQUpdated = SQArray[index].contents
    
    var SQFinal = []
    SQUpdated.forEach(element => {
        var temp = element.name.endsWith('.jpg') || element.name.endsWith('.png')
        if (temp == true) {
            SQFinal.push(`${element.name}`)
        }
    })


    console.log('   Source Path: ' + '/source' + currentPath)

    var sourcePath = 'source' + currentPath

    //deploy page under that name with 
    app.get("/"+`${usableName}`, (req, res) => {
        res.locals.session = req.session
        res.render('gallery', {
            title: `${element.name}`,
            //trying to pass the path through, need to figure out how
            //likely need to add different elements of the JSON together
            path: `${sourcePath}`,
            sqPath: sqPath,
            photos: filesArr,
            SQFinal: SQFinal

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


app.listen(port, function() {
    console.log(' ')
    console.log('Indexing Completed')
    console.log(`Server listening on port ${port}`);
});