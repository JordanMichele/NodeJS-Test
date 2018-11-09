// Node + Express App TEST Test
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("home.ejs");
})

app.get('/favoriteteam/:favteam', (req, res) => {
    let favteam = req.params.favteam;
    res.render("love.ejs", {favteam: favteam});
});

app.get('/rivalteam/:rivalteam', (req, res) => {
    let rivalteam = req.params.rivalteam;
    res.render("rival.ejs", {rivalteam: rivalteam});
});

app.get('/about', (req, res) => res.json({Success: 'Welcome to the about us page'}))

app.listen(port, () => console.log(`hello Erin ${port}!`))