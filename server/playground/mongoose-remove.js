const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// removes all of the docs
// Todo.remove({}).then((result) => {
//     console.log(result);
// });
// removed a doc by id
Todo.findByIdAndRemove('').then((todo) => {
    console.log(todo);
});

Todo.findOneAndRemove({_id: ''}).then((todo) => console.log(todo));