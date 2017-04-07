const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '58e6976c0588fab4baeb8eb51';
var userId = '58e54133a8224646ab4be6e6';

// if (!ObjectID.isValid(id)) {
//     console.log('Id is not valid');
// }

// Todo.find({
//     _id: id
// }).then( (todos) => {
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then( (todo) => {
//     console.log('Todo: ', todo);
// });

// Todo.findById(id).then( (todo) => {
//     if (!todo) {
//         return console.log('Unable to find');
//     }
//     console.log(`Todo by ID: ${todo}`);
// }).catch( (e) => {
//     console.log(`Error: ${e} is wrong`);
// });

if(!ObjectID.isValid(userId)) {
    console.log(`ID ${userId} is invalid`);
} else {
    User.findById(userId).then( (user) => {
        console.log(JSON.stringify(user, undefined, 2));
    }).catch( (e) => {
        console.log('you will never see this');
    });
}

