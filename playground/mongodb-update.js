// require mongo db
const {MongoClient, ObjectID} = require('mongodb');
// connec to mongo db
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    } 
    console.log('Connected to Mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     text: "delete me"
    // }, {
    //     $set: {
    //         completed: true,
    //         text: "this was updated"
    //     }
    // }, {
    //     returnOriginal: false
    // }).then( (res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('58e424c9a8257ab60fc9e553')
    }, {
        $set: {
            name: "Alexander"
        },
        $inc: {
            age: 1
        }
    }).then( (res) => {
        console.log(res);
    });

    db.close();
});