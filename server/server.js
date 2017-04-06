const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// start express
var app = express();
// middleware
app.use(bodyParser.json());
// post routes
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then( (doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

// get routes
app.get('/todos', (req, res) => {
    Todo.find().then( (todos) => {
        res.send({
            todos
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

// setup port
app.listen(3000, () => {
    console.log('http://localhost:3000/');
});




module.exports = {
    app
};