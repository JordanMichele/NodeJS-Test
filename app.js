// Node + Express App TEST Test
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.render("home.ejs");
})
app.get('/about', (req, res) => res.json({Success: 'Welcome to the about us page'}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))