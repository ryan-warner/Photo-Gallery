//express variables
const express = require("express");
const app = express();
const port = 80;

//readline variables
const readline = require('readline');

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}


const ans = await askQuestion("Are you sure you want to deploy to PRODUCTION? ");


app.set('view engine', 'pug');


//render homepage
app.get("/", (req, res) => {
    res.render('index');
});

//render additional pages

app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});