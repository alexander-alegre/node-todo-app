// require mongo db
const {MongoClient, ObjectID} = require('mongodb');
// connec to mongo db
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    } 
    console.log('Connected to Mongodb server');

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: "eat lunch"
    // }).then( (res) => {
    //     console.log(res);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'delete me'
    // }).then( (res) => {
    //     console.log(res);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then( (res) => {
    //     console.log(res);
    // });

    // deleteMany to delete Alex
    db.collection('Users').deleteMany({
        name: "Alex"
    }).then( (res) => {
        console.log(res);
    });

    // delete one by id
    db.collection('Users').findOneAndDelete({
        _id: ObjectID('58e4247ea8257ab60fc9e542')
    }).then( (res) => {
        console.log(res);
    });

    db.close();
});