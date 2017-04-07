const _ = require('lodash');
const {ObjectID} = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// start express
var app = express();
const port = process.env.PORT || 3000;
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

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // validate id
    Todo.findById(id).then( (todo) => {
        if (!ObjectID.isValid(id)) {
            res.send('ID is incorrect');
        } else {
            res.send(JSON.stringify(todo, undefined, 2));
        }
    }).catch( (err) => {
        res.send(404);
    });
});

// delete routes
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    // validate the id
    // not valid, send 404
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    // get the id
    // remove to do by id
    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

// patch routes
app.patch('/todo/:id', (req, res) => {
    var id = req.params.id;
    var body  = _.pick(req.body, ['text', 'completed']);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('ID is not valid');
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(400).send('cannot find id');
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send(e);
    });
});




// setup port
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});




module.exports = {
    app
};