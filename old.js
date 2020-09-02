//file search variables
const path = require('path');
const fs = require('fs');

//search directory for files
const directoryPath = path.join(__dirname, 'High Quality Library');


//file tree creation
fs.readdir(directoryPath, function (err, folders) {
    //log errors as they occur
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    
    //listing all folders/files as a tree
    folders.forEach(function (folder) {
        currentPath = path.join(__dirname, 'High Quality Library', folder); 

        //listing out all files   
        fs.readdir(currentPath, function (err, files) {
            //log errors as they occur
            if (err) {
                return console.log('Unable to scan files: ' + err);
            } 
            
            //convert folder title to an HTML compatible one (lower case and spaces become hyphens)
            convertedName = folder.replace(/\s+/g, '-').toLowerCase();
            
            //Set gallery links -- try to
            app.get(`/${convertedName}`, (req, res) => {
                res.send(`Hello, World! (And ${convertedName}!)`);
            });
            
            //log folder and file names
            console.log(folder)
            files.forEach(function (file) {
            console.log('   ' + file); 
        });
        
        });
    });
});