const express = require('express');
const app = express();
const food = require('./models/food')

app.get('/', (req, res) => {  
    res.send('Welcome to the Gitpub App');
});
// Index View to show drink data
app.get('/food/', (req, res) => {
    res.render('drinks_index.ejs', {allFood: food});
});
// Show Route
// app.get('/drinks/:id', (req, res) => {
//     res.send(req.params.id);
//     });
// adding jpg
app.get('/food/:id', (req, res) => {
    res.render('drinks_show.ejs', {
        allFood: food[req.params.id]
    });
    });

//  linking data
app.get('/food/:id', (req, res) => {
    res.render('drinks_show.ejs', {allFood: food[req.params.id]});
});



app.listen(3000, () => {
    console.log('listening..');
});