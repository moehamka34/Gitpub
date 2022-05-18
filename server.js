const express = require('express');
const app = express();
const drinks = require('./models/drinks')

app.get('/', (req, res) => {  
    res.send('Welcome to the Gitpub App');
});
// Index View to show drink data
app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {allDrinks: drinks});
});
// Show Route
// app.get('/drinks/:id', (req, res) => {
//     res.send(req.params.id);
//     });
// adding jpg
app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {
        allDrinks: drinks[req.params.id]
    });
    });

//  linking data
app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {drink: drinks[req.params.id]});
});



app.listen(3000, () => {
    console.log('listening..');
});