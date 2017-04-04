// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    } 
    console.log('Connected to Mongodb server');

    // db.collection('Todos').insertOne({
    //     "text": "Something to do",
    //     "completed": false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert dodo', err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: "Alex",
    //     age: 23,
    //     location: "Phoenix"
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert item');
    //     }
    //     console.log(res.ops[0]._id.getTimestamp()); 
    // });



    db.close();
});