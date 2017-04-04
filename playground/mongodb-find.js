// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if (err) {
//         return console.log('Unable to connect to Mongodb server');
//     } 
//     console.log('Connected to Mongodb server');

//     db.collection('Todos').find({
//         _id: new ObjectID('58df3d78b79efe826216adfa')
//     }).toArray().then( (docs) =>{
//         console.log('Todos');
//         console.log(JSON.stringify(docs, undefined, 2));
//     }, (err) => {
//         console.log('unablet to fetch todos', err);
//     });
//     db.close();
// });

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    } 
    console.log('Connected to Mongodb server');

    db.collection('Users').find({
        name: "Jennifer"
    }).toArray().then( (docs) =>{
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch todos', err);
    });
    db.close();
});